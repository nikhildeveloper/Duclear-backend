import express from 'express'
import expenseEntry from '../controllers/expenseEntry.js'
import {getExpenses} from '../controllers/getExpenses.js'
import expenseUpdate from '../controllers/expenseUpdate.js'
const router = express.Router()

router.post('/sendexpense',expenseEntry)
router.get('/getexpenses', getExpenses)
router.put('/updateexpense/:email',expenseUpdate)


export default router
