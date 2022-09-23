const express = require("express");
const app = express();
// --->Require And Instantiate Express
const mongoose = require("mongoose");
// ----> Require Mongoose for Schema
const methodOverride = require("method-override");
// ----> Override Method for Delete
require("dotenv").config();
// ----> Link ENV variables

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// --->Require and Instantiate JSX viewEngine

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
// ---->Establish Middleware

app.use(express.urlencoded({ extended: false }));
// ---->Parse req.body

app.use(methodOverride("_method"));
//Instantiate MethodOverride for CRUD

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get('/logs/new', (req, res) => {
    res.render('New', {})
})



app.listen("3000", () => {
  console.log("Server Running on port 3000");
});