import expenseLog from "../models/expensesLog.model.js";

const expenseEntry = async (req,res)=> {
    try {
        console.log(req.body);
        const newExpenseEntry = new expenseLog(req.body);
        const injectExpense = await newExpenseEntry.save()
        console.log(injectExpense)
        res.status(200).send("Successfully added")
    } catch (error) {
        console.error('Error saving expense entry:', error);
        res.status(500).send("Error adding expense");
    }

}

export default expenseEntry