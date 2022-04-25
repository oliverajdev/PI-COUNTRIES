const { DataTypes } = require('sequelize');


module.exports =  (sequelize) => {
    sequelize.define('tourism',{
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.INTEGER,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season:{
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera')
        }
    })
}

