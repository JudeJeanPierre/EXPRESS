const express = require ('express')
const app = express()
const PORT = 3000
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokeman App!');
})

app.get('/pokemon/', (req, res) =>{
    res.render('Index.jsx')
})




app.listen(PORT, (req, res) =>{
    console.log('Listening on ' + PORT)
})