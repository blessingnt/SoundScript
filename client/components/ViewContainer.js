import React from "react"
import Transcription from "./Transcription.js"

// when a new transcript is created, should automatically render
// into our view container (might delete this feature-> to just display)
// one transcript at a time

function ViewContainer({data}) {
  return (
    <div>
      <Transcription data={data}/>
      <Transcription />
    </div>
  );
}

export default ViewContainer