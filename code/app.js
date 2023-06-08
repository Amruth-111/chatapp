const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const Sequelize=require('./util/databases')


const userroutes=require('./routes/users')
const msgroutes=require('./routes/messages')

const usertable=require('./models/user')
const msgtable=require('./models/messages')


const app=express();


app.use(cors({
    origin:'*'
}));

app.use(bodyparser.json())

app.use('/user',userroutes)
app.use('/message',msgroutes)


usertable.hasMany(msgtable)
msgtable.belongsTo(usertable)

Sequelize.sync({force:true}).then(()=>{
    app.listen(8000)
}).catch(e=>{
    console.log(e)
})