const { Router } = require('express');
const { Country } = require('../db.js');
const { Tourism } = require('../db.js');


const router = Router();



router.post('/',async (req,res,next) => {
   
    const {name, types, difficulty, duration, season, countries} = req.body;


    
    

    try{
        if(name && types && difficulty && duration && season && countries){
            const count =await Tourism.count()
            if(count > 0){
                const ARRAY_MATCH_COUNTRIES = countries.map(async e =>await  Tourism.findOne({
                    where:{
                        name: name,
                    },
                        include:[{
                            model:Country,
                            where:{
                                code:e
                            }
                        }]
                    
                }))
    
                const validatorCountries = await Promise.all(ARRAY_MATCH_COUNTRIES)
                validatorCountries.map(e =>{
                    if(e !== null) return res.status(404).json('Country match')
                })
            }
            

            


            const activity = await Tourism.create({
                name: name,
                types: types,
                difficulty: difficulty,
                duration: duration,
                season: season
            })
            await activity.setCountries(countries)

            res.status(201).json(countries)
        }else  res.status(404).json('Missing data')

    

      
    }catch(err){
        next(err)
    }
    
})


module.exports = router;