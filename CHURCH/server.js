// Requirements and Init
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Member = require('./models/members')
const Pastor = require('./models/pastors')
const port = 3000;
const methodOverride = require('method-override');
// Jsx
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// Parser
app.use(express.urlencoded({ extended: false }));
// Middleware
app.use((req, res, next) =>{
    console.log("I am here to run all the routes");
    next();
});
app.use(methodOverride("_method"));
// Connection to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>{
    console.log("Connected to Mongo");
});
// All the Routes 
// Index
app.get('/members', (req, res) =>{
    Member.find({}, (err, allMembers) =>{
        console.log(err);
        res.render("Index", { members: allMembers });
    });
});
// app.get('/pastors', (req, res) =>{
//     Member.find({}, (err, allPastors) =>{
//         console.log(err);
//         res.render("Index", { members: allPastors });
//     });
// });

// New

app.get('/members/new', (req, res) =>{
    res.render('New', {})
})
app.post('/members', (req, res) =>{
    if(req.body.memberIsBaptized === "on"){
    req.body.memberIsBaptized = true;
    } else{
        req.body.memberIsBaptized = false
    }
    Member.create(req.body, (err, createdMember) =>{
    console.log(err)
    })
    res.redirect('/members')
})
// Seeds
app.get('/members/seed', (req, res) =>{
    Member.create([
        {
            name: "Jude Jean Pierre",
            address: "10489 Governours ln Apt B Indianapolis, IN 46235",
            email: "judejp@gmail.com", 
            phone: "317-260-6684",
            repentanceYear: 2009,
            churchAffiliationLocation: "East 38th Street",
            pastor: "Sam Jackson",
            memberIsBaptized: true,
        },
        {   name: "Phil Marcus",
            address: "16474 Main Street Apt D Indianapolis, IN 47205",
            email: "philmarcus10@gmail.com", 
            phone: "317-546-7868",
            repentanceYear: 1998,
            churchAffiliationLocation: "West Michigan Street",
            pastor: "Donny Owens",
            memberIsBaptized: true,
        },
        {   name: "Jane Labb",
            address: "6633 Urban Blvd unit 805, Cincinnati",
            email: "janeLabb7@gmail.com", 
            phone: "465-540-9084",
            repentanceYear: 2018,
            churchAffiliationLocation: "Main street downtown",
            pastor: "David Orton",
            memberIsBaptized: false,
        }
    ], (err, data) =>{
        res.redirect('/members')
    });
})

app.get('/pastors/seed', (req, res) =>{
    Pastor.create([
        {
            name: "Sam Jackson",
            email: "samjackson01@gmail.com", 
            phone: "317-384-9058",
            churchRegion: "East Side",
            rankInChurch: "Lead Pastor",
            isMissionBoardMember: true,
        },
        {
            name: "Donny Owens",
            email: "donnyowens77@gmail.com", 
            phone: "317-756-0987",
            churchRegion: "West Side",
            rankInChurch: "Pastor Assistant",
            isMissionBoardMember: false,
        },
        {
            name: "David Orton",
            email: "davidorton06@gmail.com", 
            phone: "456-675-7894",
            churchRegion: "Downtown",
            rankInChurch: "Youth Pastor",
            isMissionBoardMember: false,
        }
    ], (err, data) =>{
        res.redirect('/pastors')
    });
})
// Edit
app.get('/members/:id/edit', (req, res) =>{
    Member.findById(req.params.id, (err, foundMember) =>{
        console.log(err);
        res.render("Edit", { member: foundMember });
    });
})
// Update
app.put("/members/:id", (req, res) => {
    if (req.body.memberIsBaptized === "on") {
        req.body.memberIsBaptized = true;
    } else {
        req.body.memberIsBaptized = false;
    }
    Member.findByIdAndUpdate(req.params.id, req.body, (err, updatedMember) => {
        res.redirect(`/members/${req.params.id}`);
    });
});
// Delete
app.delete('/members/:id', (req, res) =>{
    Member.findByIdAndRemove(req.params.id, (err, foundMember) =>{
        console.log("Deleted", foundMember);
        res.redirect("/members");
    });
});
// Show
app.get("/members/:id", (req, res) => {
    Member.findById(req.params.id, (err, foundMember) => {
        console.log(err);
        Pastor.find({name: foundMember.pastor}, (err, foundPastor) =>{
            console.log("Found", foundMember);
            console.log("Found", foundPastor[0]);
            res.render("Show", { member: foundMember, pastorId: foundPastor[0]._id });
        })
    
    });
});
app.get("/pastors/:id", (req, res) => {
    Pastor.findById(req.params.id, (err, foundPastor) => {
        console.log(err);
        console.log("Found", foundPastor);
        res.render("PastorShow", { pastor: foundPastor });
    });
});

// Listen
app.listen(port, (req, res) =>{
    console.log(`Server listening on port ${port}`);
});



