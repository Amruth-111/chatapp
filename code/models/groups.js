
const Sequelize=require("sequelize")
const sequelize=require("../util/databases")

const group=sequelize.define("groupName",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    groupName:Sequelize.STRING,

})

module.exports=group;