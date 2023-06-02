const express=require('express');
const app=express();
// app.set("views",'view');
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    // res.sendStatus(200);
    res.render('index');
});
app.listen(3000,()=>{
    console.log("Server started at http://localhost:3000");
})