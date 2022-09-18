const express = require ('express')
const app = express()
const PORT = 3000
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
const pokemon = require ('./models/pokemon')

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokeman App!');
})

app.get('/pokemon', (req, res) =>{
    res.render('Index.jsx', {pokemon})
})

app.get('/pokemon/:id', (req, res) =>{
    res.render('Show.jsx', {pokemon : pokemon[req.params.id]})
})



app.listen(PORT, (req, res) =>{
    console.log('Listening on ' + PORT)
})