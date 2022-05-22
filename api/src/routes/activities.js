const { Router } = require('express');
const { Country } = require('../db.js');
const { Tourism } = require('../db.js');


const router = Router();


router.get('/:id', async(req,res,next) => {
    var id = req.params.id;

    id = parseInt(id)
    

    try{

        if(typeof id === 'number'){
           const matchActivity = await Tourism.findOne({
                where:{
                    id: id
                }
            })
            

            res.status(201).json(matchActivity)
        }else{
            res.status(404).send('Error id')
        }


    }catch(err){
        next(err)
    }
})




router.get('/', async (req,res,next) =>{

    try{
        const activities = await Tourism.findAll({
            include:{
                model: Country,
                attributes: ['image']
            }
           })

        res.status(200).json(activities)
    }catch(err){
        next(err)
    }
})



router.post('/',async (req,res,next) => {
   
    const {name, types, difficulty, duration, season, countries} = req.body;
    
    try{
        if(name && types && difficulty && duration && season && countries){

        const [activity,created] =  await Tourism.findOrCreate({
                where:{name:name},
               
                defaults:{
                    types:types,
                    difficulty:difficulty,
                    duration:duration,
                    season:season
                }
            })

        
        
        const result = await activity.setCountries(countries)
        console.log(result)

        res.status(201).json(result)


            
        }else  res.status(404).json('Missing data')

      
    }catch(err){
        next(err)
    }
    
})



router.put('/update/:id', async (req,res,next) => {
  var id = req.params.id;
  id = parseInt(id)

  const {name,type,duration,difficulty,season} = req.body;
  
  try{
      if(id){
        const update = await  Tourism.update({
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


router.delete('/delete/:id', async (req,res,next) => {
    var id = req.params.id;
 
      id = parseInt(id)
    
    try{
        if(id){
            const deleteActivity = await Tourism.destroy({
                where:{
                    id:id
                }
            })

            console.log('delete',deleteActivity)
            res.status(201).json(deleteActivity)
        }
    }catch(err){
        
        next(err)
    }
})



module.exports = router;