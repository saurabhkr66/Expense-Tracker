import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors';

import db from './config/db.js'
import transactionsroutes from "./routes/transactionsroutes.js";



const app=express()


dotenv.config();
db();

const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use(cors());





app.use("/api/v1/transactions",transactionsroutes);

app.get('/',(req,res)=>{
    res.send('hello world')
})




const server=()=>{
    app.listen(PORT,()=>{
    console.log("tou are listening at ",PORT);
})
}
server();
