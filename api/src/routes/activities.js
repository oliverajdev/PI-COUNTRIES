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


module.exports = router;