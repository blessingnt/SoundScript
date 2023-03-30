const express = require('express');
const app = express();
const path = require('path');
const assemblyai = require('./assemblyai.js')

// TEST REQUESTS - Working
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// })


// app.get('/api', (req, res) => {
//     res.json({"user":["Josey", "Bunda", "Chunkz"]}) //this is our backend API
// })

//WE NEED TO PARSE THE REQUEST BODY!! OTHERWISE IT WILL NOT WORK!
const bodyParser = require('body-parser');

// Add body-parser middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Client makes POST request to transcribe
app.post('/api/transcribe', assemblyai.getTranscription, (req, res) => {
    //const transcription = assemblyai.getTranscription(req.body.videoURL)
    res.status(200).json(res.locals.responseData);
})

app.listen(3000, ()=> {console.log('Running server on Port 3000')})