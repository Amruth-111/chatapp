const Sequelize=require('sequelize');

let sequelize=require('../util/databases');


const messages=sequelize.define("messages",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    message:Sequelize.STRING,
    groupId:Sequelize.INTEGER,
    userName:Sequelize.STRING
})

module.exports=messages