import expenseLog from "../models/expensesLog.model.js"
const deletUserExpense = async (req,res)=>{
    const user_emailid = req.params.email
    console.log(user_emailid)
    const deletedItem = await expenseLog.findOneAndDelete({email: user_emailid})
    if(!deletedItem){
        return res.status(404).send("expense not found")
    }
    else{
        res.send("expense deleted successfully")
    }

}

export default deletUserExpense