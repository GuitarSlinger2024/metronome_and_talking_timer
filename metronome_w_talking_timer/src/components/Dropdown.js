import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import '../styles/dropdown.css'

function Dropdown({
  label,
  placeHolder,
  options,
  currentOpt,
  optNum,
  setOption,
  disable,
  showList,
  setShowList,
  type,
}) {
  const { sounds, metronomeVolume } =
    useContext(SettingsContext)

  function optionClicked(e) {
    //  Check if the play btn in the Sound dropdown was clicked
    let target = e.target.nodeName === 'IMG' ? e.target.parentElement : e.target
    if (target.classList.contains('playBtn')) {
      const testSound =
        sounds[
          target.parentElement.textContent
            .replace(' (default)', '')
            .replaceAll(' ', '_')
            .toLowerCase()
        ].cloneNode(true)
      testSound.volume = metronomeVolume / 100
      testSound.play()
    } else {
      if (type === 'sound')
      setOption(target.textContent.replaceAll(' ', '_').toLowerCase())
      else
      setOption(target.textContent)
      setShowList(false)
    }
  }

  function titleCase(text) {
    const textObj = text.split(' ')
    textObj.forEach((txt, i) => {
      textObj[i] = txt[0].toUpperCase() + txt.slice(1)
    })
    return textObj.join(' ')
  }

  return (
    <div
      className={`form-container ${disable ? 'disable' : ''}${
        showList ? ' show' : ''
      }`}
    >
      <div className="dropdown">
        <label>{label}</label>
        <br />
        <div
          className="input"
          name="datalist"
          onClick={() => {
            document
              .querySelectorAll('.show')
              .forEach(show => show.classList.remove('show'))
            setShowList(prev => !prev)
          }}
        >
          {(currentOpt && titleCase(currentOpt.replaceAll('_', ' '))) || <span className="placeHolder">{placeHolder}</span>}
        </div>
        <div className={`datalist-container ${type ? type : ''}`}>
          <datalist className="datalist">
            {options &&
              options.map((opt, i) => (
                <div
                  className="option"
                  onClick={e => {
                    optionClicked(e)
                  }}
                  key={i}
                >
                  {opt}
                </div>
              ))}
          </datalist>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
