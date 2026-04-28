import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import Welcome from './Welcome'
import LessonInfo from './LessonInfo'
import Exercises from './Exercises'
import { useEffect } from 'react'

function ExerciseCtrl({ startLesson, pauseLesson, setStartLesson, showRecords }) {
  const { section, part, lesson, metronomeSound, sounds, metronomeVolume} =
    useContext(SettingsContext)

  const [lessonInfo, setLessonInfo] = useState(null)
  const [beatInterval, setBeatInterval] = useState(null)

  function getExerciseRecords() {
    let logData = localStorage.getItem('exerciseLogs') ? JSON.parse(localStorage.getItem('exerciseLogs')) : {}
    if (logData[section] && logData[section][part] && logData[section][part][lesson]) return logData[section][part][lesson]
    return []
  }

  function runMetronome(newSound) {
    const interval =
      section === 'Sweep Picking' &&
      (lesson === 'Changing Directions' || lesson === 'Building Speed')
        ? 750
        : 1500
    clearInterval(beatInterval)
    setBeatInterval(
      setInterval(() => {
        const sound = newSound.cloneNode()
        sound.volume = metronomeVolume / 100
        sound.play()
      }, interval)
    )
  }

  useEffect(() => {
    const newSound =
      sounds[
        metronomeSound.replace(' (default)', '').replaceAll(' ', '_')
      ].cloneNode(true)
    newSound.volume = metronomeVolume / 100

    clearTimeout(beatInterval)
    setBeatInterval(null)
    if (startLesson) runMetronome(newSound)
  }, [startLesson, metronomeVolume, metronomeSound])

  return (
    <div  className={`${showRecords ? 'hideThis' : 'wtf'}`}>
      {!section && <Welcome />}
      {section && !startLesson && (
        <LessonInfo
          section={section}
          part={part}
          lesson={lesson}
          lessonInfo={lessonInfo}
          setLessonInfo={setLessonInfo}
          bpm={(lesson === 'Changing Directions' || lesson === 'Building Speed') ? '80' : '40'}
          getExerciseRecords={getExerciseRecords}
        />
      )}
      {startLesson && (
        <Exercises
          pauseLesson={pauseLesson}
          lessonInfo={lessonInfo}
          startLesson={startLesson}
          setStartLesson={setStartLesson}
          metronomeVolume={metronomeVolume}
        />
      )}
    </div>
  )
}

export default ExerciseCtrl
