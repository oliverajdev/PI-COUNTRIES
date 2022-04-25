const { Router } = require('express');
const { Country } = require('../db.js');
const fetch = require('node-fetch');




const router = Router();

router.get('/',async (req,res) => {
    

   var allcountries = fetch('https://restcountries.com/v3/all')
   .then(response => response.json())

   allcountries.then(async r =>{
      var PROMISE_ARRAY = r.map( e => {
          
          Country.create({
              code : e.cca3,
              name: e.name.common,
              image: e.flags,
              continent: e.continents,
              capital: e.capital || ["No tiene capital"],
              subRegion: e.subregion,
              area: e.area,
              population: e.population

          })
      })
      await Promise.all(PROMISE_ARRAY)
   })


    
})


router.get('/:idcountry',async (req,res) => {
    
})

router.post('/activity',async (req,res) => {
    
})

module.exports = router;