import express from 'express';
import {fileURLToPath} from 'url'
import path from 'path';
import router from './routes/expensesForm.js'
import mongoose from 'mongoose'
import CORS from 'cors'

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName)
const PORT = 8080
const dbUrl = "mongodb+srv://duclear:Duclear%40123@duclearcluster.sbvunel.mongodb.net/Duclear?retryWrites=true&w=majority&appName=DuclearCluster"



const app = express();

app.use(CORS())
app.use(express.json())
app.use(express.urlencoded(({extended : false})))

app.use('/',router)

mongoose.connect(dbUrl)
.then(()=>{
    console.log('Connected to database')
    app.listen(PORT,()=>{console.log(`listening on ${PORT}`)})
})
.catch((error)=>{
    console.error('Error connecting to database', error)
})
