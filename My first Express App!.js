let xhr = new XMLHttpRequest()
xhr.onload

xhr.open('GET', '')
xhr.send
//Express
const express = require('express')
const app = express()
var lesson = require('https://www.youtube.com/playlist?list=PLu-5lDQZVB2NWMtxP403-MwzzTcQE6F-p')
app.get('/', function (req, res) {
  res.send('playlist')
})
 
app.listen(3000)
//Cors
// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// app.use(cors())
 
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })