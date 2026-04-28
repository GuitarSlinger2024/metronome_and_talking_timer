import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import '../styles/audioCtrl.css'

function VolumeCtrl() {
  const { metronomeVolume, setMetronomeVolume } = useContext(SettingsContext)
  
  useEffect(() => {
    const volumeEl = document.getElementById('volume')
    volumeEl.style.setProperty('--volume-level', metronomeVolume + '%')
  })
  
  function setVolume(e) {
    const volumeEl = document.getElementById('volume')
    var rect = volumeEl.getBoundingClientRect()
    var x = e.clientX - rect.left //x position within the element.
    const percent = (x / volumeEl.offsetWidth) * 100
    setMetronomeVolume(percent)
    volumeEl.style.setProperty('--volume-level', percent + '%')
  }

  return (
    <div id="volumeControl">
      <p>Volume</p>
      <small>
        <span>min</span>
        <span>max</span>
      </small>
      <div
        id="volume"
        onMouseDown={e => {
          setVolume(e)
        }}
        // onMouseMove={e => {
        //   setVolume(e)
        // }}
        onTouchStart={e => {
          setVolume(e)
        }}
      ></div>
    </div>
  )
}

export default VolumeCtrl
