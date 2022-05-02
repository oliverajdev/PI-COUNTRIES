require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { count } = require('console');
const fetch = require('node-fetch');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Tourism } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);




Country.belongsToMany(Tourism, {through: 'country_turism'});
Tourism.belongsToMany(Country, {through: 'country_turism'});

const allcountries = fetch('https://restcountries.com/v3/all')
.then(response => response.json())

allcountries.then(async r =>{
   const PROMISE_ARRAY =r.map( e => {
       Country.create({
           code : e.cca3,
           name: e.name.common,
           image: e.flags[0],
           continent: e.continents[0],
           capital: e.capital || ["No tiene capital"],
           subRegion: e.subregion,
           area: e.area,
           population: e.population
       })
   })
   await Promise.all(PROMISE_ARRAY);
   
})








module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
