const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(3000, () => {
    console.log("Sibusiso please finish this")
});

 app.get('/', (req, res) => {
   res.send('Hello World')
 })