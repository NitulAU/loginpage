import express from 'express';
const app=express();
const PORT=3000;
app.use(express.static('public'));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/main",(req,res)=>{
    res.render('second');
});
app.listen(PORT,()=>{
    console.log("Server started at http://localhost:3000");
});
module.exports=app;