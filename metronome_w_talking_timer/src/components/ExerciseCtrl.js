/** @type {HTMLCanvasElement} */

import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import Welcome from './Welcome'
import LessonInfo from './LessonInfo'
import Exercises from './Exercises'

//  Canvas functions
import { TabContext } from '../context/TabContext'

function ExerciseCtrl({
  showRecords,
}) {
  const {
    startLesson,
    pauseLesson,
    setStartLesson,
  } = useContext(TabContext)
  const {
    section,
    part,
    lesson,
    metronomeVolume,
  } = useContext(SettingsContext)

  const [lessonInfo, setLessonInfo] = useState(null)


  function getExerciseRecords() {
    let logData = localStorage.getItem('exerciseLogs')
      ? JSON.parse(localStorage.getItem('exerciseLogs'))
      : {}
    return Boolean(
      logData[section] &&
        logData[section][part] &&
        logData[section][part][lesson]
    )
      ? logData[section][part][lesson]
      : []
  }



  return (
    <div className={`${showRecords ? 'hideThis' : 'wtf'}`}>
      {!section && <Welcome />}
      {section && !startLesson && (
        <LessonInfo
          section={section}
          part={part}
          lesson={lesson}
          lessonInfo={lessonInfo}
          setLessonInfo={setLessonInfo}
          bpm={
            lesson === 'Changing Directions' || lesson === 'Building Speed'
              ? '80'
              : '40'
          }
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
