import React, { useEffect, useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

import { nums, exercises, lessons } from '../lessonData'
import Tabs from './Tablature'
import ConvertTime from './ConvertTime'
import arrow from '../_img/arrow.png'

//  https://www.npmjs.com/package/use-timer
import { useTimer } from 'use-timer'

function Exercises({ pauseLesson, lessonInfo, setStartLesson }) {
  const { section, part, lesson, useLongDesc } = useContext(SettingsContext)

  const [finished, setFinished] = useState(new Set())
  const xSpacing = 30

  const {
    time: exTime,
    start: exStart,
    pause: exPause,
    reset: exReset,
  } = useTimer({
    autostart: true,
    initialTime: 0,
    endTime: lessonInfo.minutes * 60,
    onTimeOver: () => {
      finished.add(exerciseIndex)
      console.log(exerciseIndex)
      console.log(finished)
      changeExercise(1)
    },
  })
  const {
    time: lsnTime,
    start: lsnStart,
    pause: lsnPause,
  } = useTimer({
    autostart: true,
    initialTime: 0,
  })
  const { time: totalTime } = useTimer({
    autostart: true,
    initialTime: 0,
  })

  const [lessonIndex] = useState(getLessonIndex())
  const [exerciseObj, setExerciseObj] = useState(null)
  const [exerciseIndex, setExerciseIndex] = useState(null)

  useEffect(() => {
    setExerciseObj(exercises[section][part] || exercises[section])
    setExerciseIndex(0)
  }, [])

  useEffect(() => {
    if (pauseLesson) {
      exPause()
      lsnPause()
    } else {
      exStart()
      lsnStart()
    }
  }, [pauseLesson])

  function getLessonIndex() {
    const lessonsObj = part
      ? lessons['Picking Patterns'][part]
      : lessons['Sweep Picking']
    return lessonsObj.findIndex(lssn => lssn === lesson)
  }

  useEffect(() => {
    //  Add vocals
    speechSynthesis.cancel()
    if (exerciseObj) {
      let text = exerciseObj.lessons[lessonIndex].exercises[exerciseIndex][0]
      text = text
        .replace('1 - e - & - a - 2', '1 e & a 2')
        .replace('3 - e - & - a - 4', '3 e & a 4')
      let utterance = new SpeechSynthesisUtterance(
        useLongDesc ? text : text.split(' - ')[0]
      )
      speechSynthesis.speak(utterance)
    }
  }, [exerciseIndex])

  function changeExercise(direction) {
    exReset()
    if (!pauseLesson) exStart()
    const addDirection = exerciseIndex + direction
    if (addDirection >= lessonInfo.numOfExercises) {
      lessonOver()
      setStartLesson(false)
      return
    }
    const nextEx =
      addDirection >= lessonInfo.numOfExercises
        ? lessonInfo.numOfExercises - 1
        : addDirection < 1
        ? 0
        : addDirection
    setExerciseIndex(nextEx)
  }

  function lessonOver() {
    speechSynthesis.cancel()
    let text
    if (lessonInfo.numOfExercises === finished.size) {
      text = 'This concludes '
      text += useLongDesc
        ? `${part ? part : section}, lesson ${
            exerciseObj && exerciseObj.lessons[lessonIndex].lesson
          }, ${lessonInfo && lessonInfo.title.replace(' /', '')}.`
        : `this lesson`

      let logData = localStorage.getItem('exerciseLogs')
        ? JSON.parse(localStorage.getItem('exerciseLogs'))
        : {}
      if (!logData[section]) logData[section] = {}
      if (!logData[section][part]) logData[section][part] = {}
      if (!logData[section][part][lesson]) logData[section][part][lesson] = []

      const date = Date.now()
      logData[section][part][lesson].push(date)
      localStorage.setItem('exerciseLogs', JSON.stringify(logData))
      console.log(logData)
    } else {
      const unFinished = []
      for (let x = 0; x < lessonInfo.numOfExercises; x++) {
        if (!finished.has(x)) unFinished.push(nums[x + 1])
      }
      text = `This practice session will not be logged. `
      if (useLongDesc) {
        text += `You failed to complete exercise${
          unFinished.length > 1 ? 's' : ''
        } `
        const lastItem =
          unFinished.length > 1 ? ` and ${unFinished.pop()}.` : '.'
        text += unFinished.join(' ') + lastItem
      }
    }
    let utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  return (
    <div id="main-display">
      <div id="description">
        <h3>
          {!part && section}
          {part && part}
        </h3>
        <p>
          <strong style={{ fontWeight: 700 }}>
            Lesson{' '}
            {`${nums[exerciseObj && exerciseObj.lessons[lessonIndex].lesson]}`}:{' '}
          </strong>{' '}
          {lessonInfo.title}
        </p>
        <div className="exercise-description">
          <p>
            {exerciseObj &&
              exerciseObj.lessons[lessonIndex].exercises[exerciseIndex][0]}
          </p>
        </div>
      </div>
      <div className="exercise practice">
        <Tabs
          xSpace={xSpacing}
          notesOnStaff={
            exerciseObj &&
            exerciseObj.lessons[lessonIndex].exercises[exerciseIndex]
          }
          strokes={''}
        />
        <div className="info">
          <div
            className="time"
            id="timeExercise"
          >
            This Exercise: {<ConvertTime seconds={exTime} />}
          </div>
          <div
            className="time"
            id="timeLesson"
          >
            Practice Time: {<ConvertTime seconds={lsnTime} />}
          </div>
          <div
            className="time"
            id="timeTotal"
          >
            Total Time: {<ConvertTime seconds={totalTime} />}
          </div>
        </div>

        <div
          id="forwardAndBack"
          className="practice"
        >
          <div className="back">
            <img
              src={arrow}
              alt=""
              onClick={() => {
                changeExercise(-1)
              }}
            />
          </div>
          <h4 className="text">Back / Forward</h4>
          <div className="forward">
            <img
              src={arrow}
              alt=""
              onClick={() => {
                changeExercise(1)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercises
