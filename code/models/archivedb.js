const Sequelize=require("sequelize")
const sequelize=require("../util/databases")

const archeivedb=sequelize.define("archeivechat",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    message:Sequelize.STRING,
    userId:Sequelize.INTEGER,
    groupId:Sequelize.INTEGER,
    userName:Sequelize.STRING
})

module.exports=archeivedb