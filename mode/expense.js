const mongoose=require('mongoose');

const ExpensesSchema=new mongoose.Schema({
    title:{
        type: String,
        required:[true,'please enter title']
    },
    amount:{
        type:Number,
        required:[true,'please enter amount']
    },
    date:{
        type: String
    }
})
module.exports=mongoose.model('expenses',ExpensesSchema);