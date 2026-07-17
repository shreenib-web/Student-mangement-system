import express from 'express';
import route from './routes/route.js';
const app = express();
const port = 3000;


app.use('/',route);


app.listen(port, ()=>{
    console.log("server is running : http://localhost:${port}")
})

//(req,res) =>{  res.send("Home page")}