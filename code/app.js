const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const Sequelize=require('./util/databases')
const path=require('path')
const cron=require("node-cron")


const userroutes=require('./routes/users')
const msgroutes=require('./routes/messages')
const grproutes=require('./routes/groups')

const usertable=require('./models/user')
const msgtable=require('./models/messages')
const groupdb=require('./models/groups')
const usergroupdb=require('./models/usergroup')
const archivedb=require('./models/archivedb')

const app=express();


app.use(cors({
    origin:'*'
}));

app.use(bodyparser.json())

app.use('/user',userroutes)
app.use('/message',msgroutes)
app.use('/group',grproutes)


usertable.hasMany(msgtable)
msgtable.belongsTo(usertable)


groupdb.belongsToMany(usertable,{through:usergroupdb})
usertable.belongsToMany(groupdb,{through:usergroupdb})

// msgtable.belongTo(groupdb)
// groupdb.hasMany(msgtable)
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,`views/${req.url}`))
    console.log(req.url)
})

Sequelize.sync().then(()=>{
    app.listen(8000)
}).catch(e=>{
    console.log(e)
})

cron.schedule("0 9 * * *",async()=>{
    const response=await message.findAll()
    for(let i=0;i<response.length;i++){
     const data=await archivedb.create({
         message:response[i].dataValues.message,
         userId:response[i].dataValues.userId,
         groupId:response[i].dataValues.groupId,
         userName:response[i].dataValues.userName
     })
    await message.destroy({where:{id:response[i].dataValues.id}})
    }
    
 },{
     timezone:'Asia/Kolkata'
 })