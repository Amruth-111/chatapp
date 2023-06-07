const Sequelize=require('sequelize');

let sequelize=require('../util/databases');


const messages=sequelize.define("messages",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    message:{
        type:Sequelize.STRING,
        allowNull:false,
    },
})

module.exports=messages