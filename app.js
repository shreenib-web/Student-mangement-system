import express from 'express';
const app = express();
const port = 3000;


app.get('/',)

app.listen(port, ()=>{
    console.log("server is running : http://localhost:${port}")
})

//(req,res) =>{  res.send("Home page")}