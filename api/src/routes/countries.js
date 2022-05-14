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
    const {value,continent,} = req.query;
    const types = ['Recreation','Cultural','Deportivo','Natural','Health'];
    try{
        if(continent){
            const countries = await Country.findAll({
                where:{
                    continent: [continent]
                }
            })
            res.status(200).json(countries)

        }else if(types.includes(value)){
            const countries = await Country.findAll({
                include: [{
                    model: Tourism,
                    where: { types: value } 
                  }]
            })
            res.status(200).json(countries)
        }else{
            res.status(400).send('Incorrect params')
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

        if(country) return  res.status(200).json(country);
        else res.status(400).send('Id no match')
       
    }catch(err){
        next(err)
    }  
})



module.exports = router;