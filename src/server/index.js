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

// store the id and key of aylien text api
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// to sotre the retreived data from aylien
let textData = {};

// summarizing the provided document link
app.post('/postText', function (req, res) {
  textapi.sentiment({
    text: req.body.text
  }, function(error, response) {
    if (error === null) {
      // store the data in textData and send it
      textData.polarity = response.polarity;
      textData.subjectivity = response.subjectivity;
      textData.text = response.text;
      textData.polarity_confidence = response.polarity_confidence;
      textData.subjectivity_confidence = response.subjectivity_confidence;
      console.log(textData)
      res.send(textData)
    }
  });
})

// send the textData by calling this route
app.get('/getText', function (req, res) {
  res.send(textData)
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
