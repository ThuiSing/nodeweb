const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 7500;


const staticFile = path.join(__dirname,"../public");
const hbsFile = path.join(__dirname,"../templates/views")
const partialsFile = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs");
app.set("views",hbsFile);
hbs.registerPartials(partialsFile)
app.use(express.static(staticFile))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("*",(req,res)=>{
    res.status(404).render("error")
})
app.listen(port,()=>{
    console.log(`running port ${port}`)
})