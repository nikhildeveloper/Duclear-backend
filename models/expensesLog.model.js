import mongoose from "mongoose";

const expenseLogSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    logs: [
        {
            item: {
                type: String,
                required: [true, 'Item is required'],
            },
            amount: {
                type: Number,
                required: [true, 'Amount is required'],
                min: [0, 'Amount cannot be negative']
            },
            date: {
                type: Date,
                default: Date.now,
                required: [true, 'Date is required']
            },
            action: {
                type: String,
                required: [true, 'Action is required'],
                
            }
        }
    ]

})

const expenseLog = mongoose.model('expenseLog', expenseLogSchema);   // how does this work ??(the code part)

export default expenseLog;