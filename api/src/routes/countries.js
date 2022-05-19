const { Router } = require('express');
const { Country, Tourism } = require('../db.js');
const { Op, or } = require('sequelize');


const router = Router();

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


router.get('/',async (req,res,next) => {
    const {search,orderq,filterq,page,size} = req.query;
    var order = null;
    var filter = [null,null]
    if(filterq) {
        filter = filterq.split(',')
        order = 'order'
    }
    if(orderq) var orderc = orderq.split(',')
    
    try{
        if(!orderq){
            if(search){
                
                const countries = await Country.findAndCountAll({
                    where:{
                        name:{
                              [Op.iLike]: `%${search}%`
                            },
                        },
                    [order] :[ [filter[0],filter[1]]],
                    limit:size,
                    offset: page*size,
                })
                
                res.status(200).json(countries)

            }
            
            const countries = await Country.findAndCountAll({
                [order] :[ [filter[0],filter[1]]],
                limit:size,
                offset: page*size,
            })
            
            res.status(200).json(countries)
        }
        else{

            if(orderc[0] === 'continent' ){
               
                if(search){
                    const countries = await Country.findAndCountAll({
                        
                        where:{
                            [orderc[0]] : orderc[1],
                            name:{
                                  [Op.iLike]: `%${search}%`
                                },

        
                        },
                       [order] :[ [filter[0],filter[1]]],
                       limit:size,
                       offset: page*size,
                      
        
                    })
                
                    res.status(200).json(countries)
                   }else{
                    const countries = await Country.findAndCountAll({
                        where:{
                            [orderc[0]] : orderc[1],
        
                        },
                       [order] :[ [filter[0],filter[1]]],
                       limit:size,
                       offset: page*size,
        
                    })
                
                    res.status(200).json(countries)
                   }
                }

               if(orderc[0] === 'Tourism' ){
               
                if(!search){
                    const countries = await Country.findAndCountAll({
                        include: [{
                            model: Tourism,
                            where: { types: orderc[1] } 
                          }],
    
                          [order] :[ [filter[0],filter[1]]],
                          limit:size,
                          offset: page*size,
                    })
                
                    res.status(200).json(countries)

                }else{
                    const countries = await Country.findAndCountAll({
                        where:{
                            name:{
                                  [Op.iLike]: `%${search}%`
                                }
        
                        },
                        include: [{
                            model: Tourism,
                            where: { types: orderc[1] } 
                          }],
    
                          [order] :[ [filter[0],filter[1]]],
                          limit:size,
                          offset: page*size,
                    })
                
                    res.status(200).json(countries)
                }
               }

            
            
          

        }
       
    }catch(err){
        next(err)
    }
})



module.exports = router;