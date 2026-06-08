import React, { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import '../../styles/audioCtrl.css'

function VolumeCtrl() {
  const { setMetronomeVolume } = useContext(SettingsContext)

  function setVolume(e) {
    const percent = e.target.value
    setMetronomeVolume(percent)
  }

  return (
    <div id="volumeControl">
      <p>Volume</p>
      <small>
        <span>min</span>
        <span>max</span>
      </small>
      <input
        type='range'
        id="volume"
        min={0}
        max={100}
        onMouseUp={(e) => {setVolume(e)}}
        onTouchEnd={(e) => {setVolume(e)}}
      ></input>
    </div>
  )
}

export default VolumeCtrl
