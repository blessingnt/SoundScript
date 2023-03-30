//INDEX.JS is what we use to begin our react app
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

// we'll also import App here, which will be created in another folder


//loading our App component into an HTML element with an id called 'root'
ReactDOM.render(<App />, document.getElementById('root'))