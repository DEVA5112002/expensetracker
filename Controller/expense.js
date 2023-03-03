const Expenses =require('../mode/expense');

exports.getAllExpenses = async(req,res)=>
{
    try {
        const expenses=await Expenses.find(req.params.id);
        //res.send("Hi")
        res.send(expenses);
    } catch (err) {
        console.log(err);
        res.send("error happened");  
    }
}
///////////////////////////////////---BY ID----------/////////////////////////////////////
exports.getAllExpensesBYId= async(req,res)=>
{
    try {
        const expenses=await Expenses.findById(req.params.id);
       
        res.send(expenses);
    } catch (err) {
        console.log(err);
        res.send("error happened");  
    }
}
///////////////////-DELETE--//////////////////////////////////////////////////////////////
exports.deleteExpenseById=async(req,res,next)=>
{
    try {
        await Expenses.findByIdAndDelete(req.params.id);
        res.send('Expense deleted');
    } catch (error) {
        res.send('error happened')
        
    }
}
//////////////////////////////-create Expense--////////////////////////////////////////////
exports.createExpense=async(req,res)=>{
    try {
        console.log(req.body)
        await Expenses.create(JSON.parse(req.body));
        res.send('created');
    } catch (error) {
        if(error.name ==='ValidatorError'){
            const errMsg=object.values(error.errors).map(val=>val.message);
            res.send(errMsg);
            return;
        }
        // console.log(error);
        res.send('Error Happened');
    }
}
//////////////////////////////-UPDATE EXPENSE--/////////////////////////////////////////////
exports.updateExpense=async(req,res)=>
{
    try {
        await Expenses.findByIdAndUpdate(req.params.id,req.body);
        res.send('updated');
    } catch (error) {
        res.send('error happened');
    }
}
////////////////////----MIDDLEWARE---///////////////////////////////////////////////////
exports.AdminCheck=async(req,res,next)=>{
    let isAdmin=true;
    if(isAdmin){
        next();
    }else{
        res.send('AuTHENTICATION FAILED')
    }
}
/////////////////////-LOGIN-/////////////////////////////////////////////////////////
exports.logineing =async(req,res,next)=>{
console.log(req.method);
next()
}