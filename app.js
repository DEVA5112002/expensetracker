const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose=require('mongoose')
const{getAllExpenses,getAllExpensesBYId,createExpense,deleteExpenseById,updateExpense, AdminCheck,logineing}=require('./Controller/expense')
const app = new express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.text());
app.use(cors({
    origin: '*'
}));
mongoose.connect('mongodb+srv://devananth2024:OYnLaHOtwVt1ixa2@lost.8ekpzj9.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('db connected'))
app.use(logineing);
app.get('/api/v1/expenses',getAllExpenses)
app.get('/api/get_id/:id',getAllExpensesBYId)
app.post('/api/add_expense',createExpense)
app.delete('/api/del_expen/:id',deleteExpenseById)
app.put('/api/update/:id',updateExpense)


app.listen(8080,()=>{
    console.log('Server is running');
})
