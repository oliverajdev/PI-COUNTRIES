const { Router } = require('express');
const { Country } = require('../db.js');
const { Tourism } = require('../db.js');


const router = Router();



router.post('/',async (req,res,next) => {
   
    const {name, types, difficulty, duration, season, countries} = req.body;
    
    try{
        if(name && types && difficulty && duration && season && countries){
    

           const ARRAY_MATCH_COUNTRIES = countries.map(async e =>{
             const [activity, created] = await Tourism.findOrCreate({
                 where:{name:name},
                 include:[{
                     model:Country,
                     where:{code:e}
                 }],
                 defaults:{
                     types:types,
                     difficulty:difficulty,
                     duration:duration,
                     season:season
                 }
             })
             if(created) await activity.setCountries([e])
             else return e
           })
              
        const result = await Promise.all(ARRAY_MATCH_COUNTRIES)

        res.status(201).json(result)

            
        }else  res.status(404).json('Missing data')

      
    }catch(err){
        next(err)
    }
    
})


router.put('/update/:id', async (req,res,next) => {
  const id = req.params.code;
  const {name,type,duration,difficulty,season} = req.query;
  try{
      if(id){
        const update = await   Tourism.update({
               name:name,
               type:type,
               duration: duration,
               difficulty:difficulty,
               season:season
           },{
               where: {
                   id: id
               }
           })
           res.status(201).json(update);
      }
  }catch(err){
      next(err)

  }
})


router.delete('/delete')


module.exports = router;