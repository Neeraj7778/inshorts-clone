import express  from "express";
import { connectDB } from './database/db.js';
import news from "./model/new-schema.js";
import route from "./routes/route.js";
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(cors());
app.use('/', route);

const PORT_NO = process.env.PORT || 4000;

connectDB();

app.get("/" , (req,res) =>{
    res.status(200).send("API WORKING")
})

const DefaultData = async() => {
    try{
        await news.insertMany(data);
        console.log('Data imported successfully');
    }catch(error){
        console.log('Error', error.message);
    }
}

DefaultData();

app.listen(PORT_NO , (req,res)=>{
    console.log(`App running at port on http://localhost:${PORT_NO}`);
})
