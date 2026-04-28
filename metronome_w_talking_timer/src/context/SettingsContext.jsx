import { createContext, useEffect, useState } from 'react'

import audio1 from '../_metronome_sounds/bassdrum.mp3'
import audio2 from '../_metronome_sounds/bongo_1.mp3'
import audio3 from '../_metronome_sounds/bongo_2.mp3'
import audio4 from '../_metronome_sounds/bongo_3.mp3'
import audio5 from '../_metronome_sounds/bongo_4.mp3'
import audio6 from '../_metronome_sounds/bongo_5.mp3'
import audio7 from '../_metronome_sounds/bongo_6.mp3'
import audio8 from '../_metronome_sounds/smack.mp3'
import audio9 from '../_metronome_sounds/snaredrum_1.mp3'
import audio10 from '../_metronome_sounds/snaredrum_2.mp3'
import audio11 from '../_metronome_sounds/snaredrum_3.mp3'
import audio12 from '../_metronome_sounds/wood_block.mp3'
import audio13 from '../_metronome_sounds/wood_metronome.mp3'

export const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [settings] = useState(
    JSON.parse(localStorage.getItem('metronomeSettings')) || {}
  )

  //  These have to be handled with useEffect as well
  const [section, setSection] = useState(settings.section || null)
  const [part, setPart] = useState(settings.part || null)
  const [lesson, setLesson] = useState(settings.lesson || null)

  useEffect(() => {
    setSection(settings.section || null)
    setPart(settings.part || null)
    setLesson(settings.lesson || null)
  }, [])

  // These can be treated normally
  const [showSectionMenu, setShowSectionMenu] = useState(false)
  const [showPartMenu, setShowPartMenu] = useState(false)
  const [showLessonMenu, setShowLessonMenu] = useState(false)
  const [showAudioMenu, setShowAudioMenu] = useState(false)
  const [useLongDesc, setUseLongDesc] = useState(settings.useLongDesc || false)
  const [hidePickDirections, setHidePickDirections] = useState(
    settings.hidePickDirections || false
  )
  const [metronomeVolume, setMetronomeVolume] = useState(
    settings.metronomeVolume || 50
  )
  const [metronomeSound, setMetronomeSound] = useState(
    settings.metronomeSound || 'wood metronome (default)'
  )

  useEffect(() => {
    const settingsObj = {
      section: section,
      part: part,
      lesson: lesson,
      useLongDesc: useLongDesc,
      hidePickDirections: hidePickDirections,
      metronomeVolume: metronomeVolume,
      metronomeSound: metronomeSound,
    }
    localStorage.setItem('metronomeSettings', JSON.stringify(settingsObj))
  }, [
    section,
    part,
    lesson,
    useLongDesc,
    metronomeVolume,
    metronomeSound,
    hidePickDirections,
  ])

  const sounds = {
    bassdrum: new Audio(audio1),
    bongo_1: new Audio(audio2),
    bongo_2: new Audio(audio3),
    bongo_3: new Audio(audio4),
    bongo_4: new Audio(audio5),
    bongo_5: new Audio(audio6),
    bongo_6: new Audio(audio7),
    smack: new Audio(audio8),
    snaredrum_1: new Audio(audio9),
    snaredrum_2: new Audio(audio10),
    snaredrum_3: new Audio(audio11),
    wood_block: new Audio(audio12),
    wood_metronome: new Audio(audio13),
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  function correctTimeFormat(record) {
    const date = new Date(record)
    const dateArray = date.toString().split(' ')
    let time = dateArray[4].split(':')
    time.pop()
    console.log({time})
    time = time.join(':')
    if (time[0] === '0') time = time.slice(1)
    const string = `${days[new Date().getDay()]}, ${dateArray[1]} ${dateArray[2]} at ${time} ${new Date().getHours() >= 12 ? 'pm' : 'am'}`
    return string
  }

  return (
    <SettingsContext.Provider
      value={{
        section,
        setSection,
        part,
        setPart,
        lesson,
        setLesson,
        showSectionMenu,
        setShowSectionMenu,
        showPartMenu,
        setShowPartMenu,
        showLessonMenu,
        setShowLessonMenu,
        showAudioMenu,
        setShowAudioMenu,
        useLongDesc,
        setUseLongDesc,
        hidePickDirections,
        setHidePickDirections,
        metronomeSound,
        setMetronomeSound,
        sounds,
        metronomeVolume,
        setMetronomeVolume,
        correctTimeFormat
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
