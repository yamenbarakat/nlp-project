const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const aylien = require('aylien_textapi');

app.use(express.static('dist'))

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(__dirname)


const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

let data = '';

// detect the language of the text and post the data
app.post('/postText', function (req, res) {
  console.log(req.body)
  textapi.language({
    text: "good"
  }, function(error, response) {
    if (error === null) {
      data = response.lang;
      console.log(data);
      res.send(data);
    }
  });
})


app.get('/textapi', function (req, res) {
  // res.sendFile('dist/index.html')
  res.send(data)
})

console.log(textapi._options)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
