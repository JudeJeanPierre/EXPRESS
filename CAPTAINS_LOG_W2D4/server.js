const express = require("express");
const app = express();
// Mongoose
const mongoose = require("mongoose");
const Student = require('./models/logs')
// Override
const methodOverride = require("method-override");
// Env
require("dotenv").config();
// JSX engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// ---->Middleware
app.use((req, res, next) => {
    console.log("I'm here for the routes");
    next();
});
// Parser
app.use(express.urlencoded({ extended: false }));
//MethodOverride for CRUD
app.use(methodOverride("_method"));
// Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

app.get('/', (req, res) => {
    res.send('new')
})
// Index
app.get("/logs", (req, res) => {
    Log.find({}, (err, allLogs) => {
        console.log(err);

        res.render("index", { logs: allLogs });
    });
});
// New
app.get('/logs/new', (req, res) => {
    res.render('New', {})
})
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Student.create(req.body, (err, createdLog) => {
        console.log(err)
        // res.send(createdLog)
    })
    res.redirect('/logs')
})

// // Create
// Log.create(req.body, (error, createdLog)=>{
//     res.send('received')
//     // res.redirect('/logs');
// });

// Show
app.get("/logs/:id", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log(err);
        console.log("Found", foundLog);
        res.render("Show", { log: foundLog });
    });
});


app.listen("3000", (req, res) => {
    console.log("Server Running on port 3000");
});