import React, {useState, useEffect} from "react"
import axios from "axios"

//this function should fetch the response from the server
//and render it onto the page

function Transcription ({data}) {

  //const [data, setData] = useState([])

  // // client makes GET request to this server endpoint URL
  // useEffect(() => {
  //   axios.get('/api/transcribe')
  //     .then(response => {
  //       console.log('First response: ', response)
  //       setData(response.data)
  //       console.log(response.data)
  //     })
  //     .catch(err => console.log('Error: ', err))
  // }, [])

  
   return (
    <p>{data}</p>
  )
  }

export default Transcription