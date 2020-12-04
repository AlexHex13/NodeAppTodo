const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')



router.get('/', async (req,res)=>{
    const todos = await Todo.find({})
    res.render('index',{
        title: "Todos List",
        isIndex:true,
        todos
    })
})

router.get('/create',(req,res)=>{
    res.render('create',{
        title:"Create Todo",
        isCreate: true
    })
})

module.exports = router