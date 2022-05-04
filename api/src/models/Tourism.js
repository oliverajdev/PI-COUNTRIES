const { DataTypes } = require('sequelize');


module.exports =  (sequelize) => {
    sequelize.define('tourism',{
        name: {
            type: DataTypes.STRING,
        },
        types: {
            type: DataTypes.ENUM('Recreation','Cultural','Deportivo','Natural','Health')
        },
        difficulty: {
            type: DataTypes.INTEGER,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season:{
            type: DataTypes.ENUM('Summer','Outumn','Winter','Spring')
        }
    },{
        timestamps:false,
        createdAt: false,
        updateAt:false
      })
}

