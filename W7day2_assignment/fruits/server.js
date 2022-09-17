const express = require('express');

const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs')



// const fruits = ['apple', 'banana', 'pear'];

// app.get('models/fruits/', (req, res) => {
//     module.exports = fruits;
// });


app.get('/', (req, res) =>{
res.render("index");
});

//add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });





app.listen(3000, function(){
console.log('Listening on port 3000');
});



