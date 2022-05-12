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
            validate:{
                min:1,
                max:5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:24
            }
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

