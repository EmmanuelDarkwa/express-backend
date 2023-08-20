const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send('Server is up and running')
})

app.post('/home', (req, res) => {
    res.send('Welcome to Home page')
})

app.put('/user', (req, res) => {
    res.send('Hey enjoy our photos')
})

app.delete('/user/delete', (req, res) => {
    res.send('You have a delete request')
})

app.listen(3000)