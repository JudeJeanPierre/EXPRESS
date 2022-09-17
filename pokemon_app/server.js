const express = require ('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokeman App!');
})


app.listen(PORT, (req, res) =>{
    console.log('Listening on ' + PORT)
})