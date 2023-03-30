import React, { useState, Component } from "react";
import Search from "./Search.js"
import ViewContainer from './ViewContainer.js'
import axios from 'axios'
import Stylesheet from './Stylesheet.js'


// 'extends Component' gives us access to lifecycle methods, such as render
function App () {
    // create a function that makes a request to the backend, sending the video URL in the request
    // this function is called when user makes a form submission
    const [data, setData] = useState([])

    const handleSearch = (videoURL) => {
        // make sure we send videoURL in our POST request! So we can access it in the REQUEST.BODY on the backend
        axios.post('/api/transcribe', { videoURL })
        .then(response => {
          console.log('First response: ', response)
          setData(response.data)
        })
        .catch(err => console.log('Error: ', err))
    }
    
  return (
    <div className='App'>
      <Search handleSearch={handleSearch}/>
      <ViewContainer data={data}/>
    </div>
      )
  }

export default App; 