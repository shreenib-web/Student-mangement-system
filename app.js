import express from 'express';
import route from './routes/route.js';
import connectDB from './db/db.js';

const DATABASEURL = process.env.DATABASEYRL || 'mongodb://127.0.0.1:27017/'
const app = express();
const port = 3000;


app.use('/',route);


app.listen(port, ()=>{
    console.log("server is running : http://localhost:${port}")
})

//(req,res) =>{  res.send("Home page")}