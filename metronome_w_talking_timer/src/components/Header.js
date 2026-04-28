import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header>
      <h3>Metronome / Talking Timer</h3>
      <h4>for...</h4>
      <h1><span>Pick Hand </span><span style={{color: 'red'}}>First Aid</span></h1>
      <h4>(slow means smooth, smooth means fast)</h4>
    </header>
  )
}

export default Header
