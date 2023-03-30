// this file contains code that will make the API call to AssemblyAI
// We will then send the results back to the server

// import what I need to use assemblyAI, including any authorization key
const axios = require('axios');
const API_KEY = '4db3342430cc403bb86a8cb182640f40';

const assemblyai = {}

// create a function that makes a POST request to AssemblyAI in order to transcribe the Youtube URL.
assemblyai.getTranscription = async (req, res, next) => {
    try {// grab videoURL from our request.body, and create an instance of axios
    const { videoURL } = req.body
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: API_KEY
        },
    }); 
    // axios makes post request to AssemblyAI, giving it the videoURL (assembly is our axios instance)
    // this post request also returns to us a Promise object (with all the data we need). 
    const postResponse = await assembly.post('/transcript', {
        audio_url: videoURL
    })

    let status = 'queued'
    let getResponse
    const transcript_key = postResponse.data.id

    while (status == 'queued' || status == 'processing') {
        await new Promise (resolve => setTimeout(resolve, 5000))
        getResponse = await assembly.get(`/transcript/${transcript_key}`)
        console.log(getResponse.data.status, getResponse.data.error)
        status = getResponse.data.status
    }

    if (status == 'completed') res.locals.responseData = getResponse.data.text;
    else {
        console.log('Fail with status')
    }
    // if successful, return data from the Promise object (in this case, 'response' is our Promise object)
    next()
}   
    catch (err) {
        console.log(err)
    }
}

// assemblyai.getTranscription = (req, res, next) => {

    // // if status is queued or processing, wait another couple seconds
    // const status = res.data.status
    // if (status == 'queued' || status == 'processing')

    // // if status is complete, make the get request and send the transcripton text back to the server
    // if (status == 'completed') assembly.get(`/transcript/${transcript_key}`)
// }

module.exports = assemblyai