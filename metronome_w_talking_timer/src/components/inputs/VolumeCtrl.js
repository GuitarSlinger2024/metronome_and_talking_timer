import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import '../../styles/audioCtrl.css'

function VolumeCtrl() {
  const { metronomeVolume, setMetronomeVolume } = useContext(SettingsContext)
  const [value, setValue] = useState(metronomeVolume)

  function setVolume(e) {
    const percent = e.target.value
    setMetronomeVolume(percent)
  }
  
  useEffect(() => {
    setValue(metronomeVolume)
  }, [metronomeVolume])

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
        max={50}
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        onMouseUp={(e) => {setVolume(e)}}
        onTouchEnd={(e) => {setVolume(e)}}
      ></input>
    </div>
  )
}

export default VolumeCtrl
