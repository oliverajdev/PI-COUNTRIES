const { DataTypes } = require('sequelize');


module.exports =  (sequelize) => {
    sequelize.define('tourism',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        types: {
            type: DataTypes.ENUM('Recreation','Cultural','Deportivo','Natural','Health'),
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            },
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:24
            },
            allowNull: false,
        },
        season:{
            type: DataTypes.ENUM('Summer','Outumn','Winter','Spring'),
            allowNull: false,
        },
        
    },{
        timestamps:false,
        createdAt: false,
        updateAt:false
      })
}

