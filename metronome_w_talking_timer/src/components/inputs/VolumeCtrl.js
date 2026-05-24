import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import '../../styles/audioCtrl.css'

function VolumeCtrl()
{
  const { metronomeVolume, setMetronomeVolume } = useContext(SettingsContext)
  const { value, setValue } = useState(metronomeVolume)

  function setVolume(e)
  {
    setMetronomeVolume(e.target.value)
  }

  return (
    <div id="volumeControl">
      <p>Volume</p>
      <input
        type="range"
        id="volume"
        min={0}
        max={.7}
        step={.01}
        value={value}
        onChange={setValue}
        onMouseUp={(e) => { setMetronomeVolume(e.target.value) }}
        onTouchEnd={(e) => { setMetronomeVolume(e.target.value) }} />
    </div>
  )
}

export default VolumeCtrl
