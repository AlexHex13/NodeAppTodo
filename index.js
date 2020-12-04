const express = require('express')
const mongoose = require('mongoose')
const expresshbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const dotenv = require('dotenv')
dotenv.config();



const PORT = process.env.PORT || 3000
const app = express()
const hbs = expresshbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(todoRoutes)



async function start(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useFindAndModify:false
        })
    app.listen(PORT,()=>{
    console.log("Server has been started on port:", PORT);
    })
    }catch(e){
        console.log(e);
    }
}


start()