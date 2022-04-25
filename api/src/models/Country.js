const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    subRegion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    }
    
  });
};


