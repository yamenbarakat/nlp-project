var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const aylinet = require('aylien_textapi');

app.use(express.static('dist'))

console.log(__dirname)

const textapi = new aylien({
  application_id: "a5add80e",
  application_key: "fec8ea8aa52aa5f7c1e10bc2f649b8cc"
});

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
