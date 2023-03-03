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
mongoose.connect('mongodb://0.0.0.0:27017/expense-tracker')
.then(()=>console.log('db connected'))
app.use(logineing);
app.get('/api/v1/expenses',getAllExpenses)
app.get('/api/get_id/:id',getAllExpensesBYId)
app.post('/api/add_expense',AdminCheck,createExpense)
app.delete('/api/del_expen/:id',deleteExpenseById)
app.put('/api/update/:id',updateExpense)


app.listen(8080,()=>{
    console.log('Server is running');
})
