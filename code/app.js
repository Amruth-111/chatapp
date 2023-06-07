const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const Sequelize=require('./util/databases')


const userroutes=require('./routes/users')


const app=express();


app.use(cors({
    origin:'*'
}));

app.use(bodyparser.json())

app.use('/user',userroutes)

Sequelize.sync().then(()=>{
    app.listen(8000)
}).catch(e=>{
    console.log(e)
})