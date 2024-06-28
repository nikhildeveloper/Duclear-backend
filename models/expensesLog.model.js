import mongoose from "mongoose";

const expenseLogSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    }, 
    amount: {
        type : Number,
        required : true
    }, 
    date: {
        type: Date,
        required: true
    }, 
    name: {
        type : String,
        required : true
    }, 
    Action: {
        type : String,
        required : true
    }

})

const expenseLog = mongoose.model('expenseLog', expenseLogSchema);   // how does this work ??(the code part)

export default expenseLog;