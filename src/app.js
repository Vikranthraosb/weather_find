const express= require('express')
const app= express();
const path =require('path')
const port = process.env.PORT || 3000   // dynamically assigns the value of PORT from the environment variables if available; otherwise, defaults to port 3000, ensuring adaptability when hosted in different environments.

// public static path;
const static_path=(path.join(__dirname, "../public"))

app.use(express.static(static_path));



//routing
app.get("/", (req,res)=>{
    res.send("welcome to my project")
})
app.get("/about", (req,res)=>{
    res.send("welcome to my about")
})
app.get("/weather", (req,res)=>{
    res.send("weather channel")
})
app.get("*", (req,res)=>{
    res.send("404 errroe created by me")
})

app.listen(port,()=>{
    console.log(`listning to the port at ${port}`)
})