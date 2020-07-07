const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', function (req,res){
    res.send('INSOCK Server')
})

app.listen(8080, ()=>{
    console.log("acitive")
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
})