const { Router } = require('express');
const { Country } = require('../db.js');
const { Tourism } = require('../db.js');


const router = Router();



router.post('/',async (req,res,next) => {
   
    const {name, types, difficulty, duration, season, countries} = req.body;


    
    

    try{
        if(name && types && difficulty && duration && season && countries){
            const activity = await Tourism.create({
                name: name,
                types: types,
                difficulty: difficulty,
                duration: duration,
                season: season
            })
            await activity.setCountries(countries)

            res.status(201).json(countries)
        }else res.status(404).send('Missing data')

    

      
    }catch(err){
        next(err)
    }
    
})


module.exports = router;