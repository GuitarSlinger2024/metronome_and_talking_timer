import React, { useEffect, useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

import { nums, exercises } from '../lessonData'
import Tabs from './notesDisplay/Tablature'
import ConvertTime from './ConvertTime'

//  images
import arrow from '../_img/arrow.png'
import eighthNote from '../_img/music_notations/white/eighthNote.png'
import eighthRest from '../_img/music_notations/white/eighthRest.png'
import quarterNote from '../_img/music_notations/white/quarterNote.png'
import quarterRest from '../_img/music_notations/white/quarterRest.png'
import sixteenthNote from '../_img/music_notations/white/sixteenthNote.png'
import dotEighthRest from '../_img/music_notations/white/dotEighthRest.png'
import dotQuarterRest from '../_img/music_notations/white/dotQuarterRest.png'

//  https://www.npmjs.com/package/use-timer
import { useTimer } from 'use-timer'
import { TabContext } from '../context/TabContext'

function Exercises({ pauseLesson, lessonInfo })
{
  const {
    setStartLesson,
    exerciseObj,
    setExerciseObj,
    scrollInterval,
    setScrollInterval,
    setInterval_anime,
    exerciseIndex,
    setExerciseIndex,
    lessonIndex,
  } = useContext(TabContext)
  const { section, part, lesson, useLongDesc } = useContext(SettingsContext)

  const [finished] = useState(new Set())
  const [dotEqualsImg, setDotEqualsImg] = useState(quarterNote)
  const [showNotesPerBeat, setShowNotesPerBeat] = useState(quarterNote)

  const {
    time: exTime,
    start: exStart,
    pause: exPause,
    reset: exReset,
  } = useTimer({
    autostart: true,
    initialTime: 0,
    endTime: lessonInfo.minutes * 60,
    onTimeOver: () =>
    {
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

  useEffect(() =>
  {
    // exerciseObj includes all the lesson for the current section
    setExerciseObj(exercises[section][part] || exercises[section])
    console.log(exercises[section][part] || exercises[section])
    setExerciseIndex(0)
  }, [section, part])

  useEffect(() =>
  {
    if (pauseLesson)
    {
      exPause()
      lsnPause()
    } else
    {
      exStart()
      lsnStart()
    }
  }, [pauseLesson])

  useEffect(() =>
  {
    //  Add vocals
    speechSynthesis.cancel()
    // exerciseObj includes all the lesson for the current section
    if (exerciseObj)
    {
      console.log({ exerciseObj })
      const exercise = exerciseObj.lessons[lessonIndex].exercises[exerciseIndex]
      console.log(exercise)
      let text = exercise[0]
      text = text
        .replaceAll('1 - e - & - a - 2', '1 e & a 2')
        .replaceAll('3 - e - & - a - 4', '3 e & a 4')
        .replaceAll('e - & - a', 'e & a')
      let utterance = new SpeechSynthesisUtterance(
        useLongDesc ? text : text.split(' - ')[0]
      )
      speechSynthesis.speak(utterance)
      //  Delete white spaces in notes and directions strings
      exercise[1] = exercise[1].replaceAll(' ', '')
      exercise[2] = exercise[2].replaceAll(' ', '')

      //  dotEquals
      const image = exercise[5] === '1' ? quarterNote : exercise[5] === '2' || exercise[5] === '3' ? eighthNote : sixteenthNote
      setDotEqualsImg(image)
      setShowNotesPerBeat(exercise[5])
    }
  }, [exerciseIndex, lesson])

  function changeExercise(direction)
  {
    exReset()
    if (!pauseLesson) exStart()
    const addDirection = exerciseIndex + direction
    if (addDirection >= lessonInfo.numOfExercises)
    {
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

  function lessonOver()
  {
    speechSynthesis.cancel()
    clearInterval(scrollInterval)
    setScrollInterval(null)
    clearInterval(setInterval_anime)
    let text
    if (lessonInfo.numOfExercises === finished.size)
    {
      text = 'This concludes '
      text += useLongDesc
        ? `${part ? part : section}, lesson ${exerciseObj && exerciseObj.lessons[lessonIndex].lesson
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
    } else
    {
      const unFinished = []
      for (let x = 0; x < lessonInfo.numOfExercises; x++)
      {
        if (!finished.has(x)) unFinished.push(nums[x + 1])
      }
      text = `This practice session will not be logged. `
      if (useLongDesc)
      {
        text += `You failed to complete exercise${unFinished.length > 1 ? 's' : ''
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
      <div className="noteValue">
        {/* Show the notes per beat */}
        <div className="showNotesPerBeat">
          <span className="numOfNotes">{showNotesPerBeat}</span>
          <p>note{showNotesPerBeat > 1 ? 's' : ''} per beat</p>
        </div>
        {/* Show the musical note */}
        <div id="noteLegend">
          <div className="smallCircle"></div>=
          <div className="invertFromBlack dotEquals">
            <img
              src={dotEqualsImg}
              alt=""
            />
          </div>
        </div>
      </div>

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
        <Tabs />
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
              onClick={() =>
              {
                changeExercise(-1)
              }}
            />
          </div>
          <h4 className="text">Back / Forward</h4>
          <div className="forward">
            <img
              src={arrow}
              alt=""
              onClick={() =>
              {
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
