import React, {useState} from "react"

// when search button is clicked, should send information to our backend

function Search ({handleSearch}) {

  const [inputValue, setInputValue] = useState("")

  // function when user submits, call handleSearch passing in our state
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue)
  }
  
  // function when input field changes, update the state with the input text
  // e.target.value is the current value/string in the text field.
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
      type='search' 
      value= {inputValue}
      onChange= {handleChange}
      placeholder='Insert URL here'></input>
      <button>Transcribe!</button>
      </form>
    </div>
  )
  }

export default Search