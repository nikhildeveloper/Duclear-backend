import expenseLog from "../models/expensesLog.model.js"
const expenseUpdate =  async (req,res)=>{
    const expenseID = req.params.email
    const newLog = {
        $push: {
            logs: req.body.logs[0] // Assuming logs is an array sent in the body and you want to add the first element
        }
    }

    const sendExpense = await expenseLog.findOneAndUpdate({email:expenseID}, newLog, { new: true, upsert: true, runValidators: true })

    if(!sendExpense){
        return res.status(404).send("expense not found")
    }
    else{
        res.send(sendExpense)
    }
}

export default expenseUpdate