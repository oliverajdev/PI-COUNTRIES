const { Router } = require('express');
const { Country } = require('../db.js');
const { Op } = require('sequelize')

const router = Router();

router.get('/',async (req,res,next) => {
    const {name} = req.query;
   try{

    if(name){

        const countries = await Country.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        res.status(200).json(countries)

    }

       const countries = await Country.findAll();
        res.status(200).json(countries)

   }catch(err){
       next(err)
   }    
})


router.get('/:idcountry',async (req,res,next) => {
    const idcountry = req.params.idcountry;
    try{
        const country = await Country.findByPk(idcountry);
        res.status(200).json(country);
    }catch(err){
        next(err)
    }  
})



module.exports = router;