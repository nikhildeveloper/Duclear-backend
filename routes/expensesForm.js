import express from 'express'
import expenseEntry from '../controllers/expenseEntry.js'
import {getExpenses} from '../controllers/getExpenses.js'
const router = express.Router()

router.post('/sendexpense',expenseEntry)
router.get('/getexpenses', getExpenses)


export default router
