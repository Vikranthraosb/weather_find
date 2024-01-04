const express= require('express')
const app= express();
const path =require('path')
const port = process.env.PORT || 3000   // dynamically assigns the value of PORT from the environment variables if available; otherwise, defaults to port 3000, ensuring adaptability when hosted in different environments.
const hbs =require('hbs')
// public static path;
const static_path=(path.join(__dirname, "../public")) // these are must need
const path2=(path.join(__dirname, "../views"))

app.set('view engine', 'hbs');
app.use(express.static(static_path));
app.set('views', path.join(__dirname, '../views')); // this is must needed to define the path
hbs.registerPartials(path2)

//routing
app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/about", (req,res)=>{
    res.render('about')
})
app.get("/weather", (req,res)=>{
    res.render("weather")
})
app.get("*", (req,res)=>{
    res.render("404error")
})

app.listen(port,()=>{
    console.log(`listning to the port at ${port}`)
})