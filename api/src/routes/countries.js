const { Router } = require('express');
const { Country, Tourism } = require('../db.js');
const { Op } = require('sequelize');


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

router.get('/order', async (req,res,next) => {
    const {value,continent} = req.query;
    const types = ['Recreation','Cultural','Deportivo','Natural','Health'];
    try{
        if(continent){
            const countries = await Country.findAll({
                where:{
                    continent: [continent]
                }
            })
            res.status(200).json(countries)

        }
        else if(value === 'asc'){
            const countries = await Country.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })

            res.status(200).json(countries)
        }else if(value === 'desc'){
            const countries = await Country.findAll({
                order: [
                    ['name', 'DESC']
                ]
            })

            res.status(200).json(countries)

        }else if(value === 'popasc'){
            const countries = await Country.findAll({
                order: [
                    ['population', 'ASC']
                ]
            })
            res.status(200).json(countries)

        }else if(value === 'popdesc'){
            const countries = await Country.findAll({
                order: [
                    ['population', 'desc']
                ]
            })
            res.status(200).json(countries)
        }else if(types.includes(value)){
            const countries = await Country.findAll({
                include: [{
                    model: Tourism,
                    
                    where: { types: types } 
                  }]
            })
            res.status(200).json(countries)
        }
    }catch(err){
        next(err)
    }
})






router.get('/:idcountry',async (req,res,next) => {
    const idcountry = req.params.idcountry;
    try{
        const country = await Country.findOne({
            where: { code: idcountry },
            include: Tourism
          });;
        res.status(200).json(country);
    }catch(err){
        next(err)
    }  
})



module.exports = router;