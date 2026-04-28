import React from 'react'
import '../styles/mainDisplay.css'

function Welcome() {
  return (
  <div className="welcome">
    <h2>Welcome</h2>
    
    <p>
      These lessons can be used as a study supplement for both novice and
      experienced guitarists to develop a more refined picking technique. 
      Beginners should especially benefit from this method's overall approach.
    </p>
    
    <p className="shortMsg">I hope every practice session helps to sharpen your skills.</p>   
  </div>
  )
}

export default Welcome
