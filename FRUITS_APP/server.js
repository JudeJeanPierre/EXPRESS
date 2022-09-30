const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

// const fruits = ['apple', 'banana', 'pear'];

// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// Urlencoded
app.use(express.urlencoded({extended:false}));

// app.get('/fruits', (req, res) => {
//     res.send(fruits);
// });

app.get('/fruits', function(req, res){
    res.render('Index', { fruits: fruits });
}); 

//add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });
// app.get('/fruits/:indexOfFruitsArray', function(req, res){
//     res.render('Show');
// }); 

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// app.post('/fruits', (req, res) => {
//     res.send('hi');
// });

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    // fruits.push(req.body);
    // console.log(fruits);
    // res.send('data received');
    fruits.push(req.body);
    res.redirect('/fruits'); //send the user back to /fruits
});

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
}); 
 

app.listen(3000, () => {
    console.log('listening');
});