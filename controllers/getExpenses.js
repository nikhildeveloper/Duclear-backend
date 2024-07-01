import expenseLog from "../models/expensesLog.model.js"

export const getExpenses = async (req,res)=>{
    try {
        const expenseEntries = await expenseLog.find()
        res.json(expenseEntries)
        console.log(expenseEntries)
    } catch (error) {
        console.error(error)
    }

}