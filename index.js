const express = require("express");
const urlRoute = require("./routes/url");
const {connectToMongoose} = require("./database/connect");
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");

const app = express();
const port = 8000;

connectToMongoose("mongodb://localhost:27017/short-url")
.then(()=> console.log("mongodb connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use("/url",urlRoute);
app.use("/",staticRoute);



app.listen(port,()=>{ console.log(`Server Started at ${port}`)});