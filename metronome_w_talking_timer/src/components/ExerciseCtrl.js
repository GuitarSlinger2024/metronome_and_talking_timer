/** @type {HTMLCanvasElement} */
import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import Welcome from './Welcome'
import LessonInfo from './LessonInfo'
import Exercises from './Exercises'
import { useEffect } from 'react'
import CreateNotes from './notesDisplay/CreateNotes'
import Tablature from './notesDisplay/Tablature'

function ExerciseCtrl({
  startLesson,
  pauseLesson,
  setStartLesson,
  showRecords,
}) {
  const {
    section,
    part,
    lesson,
    metronomeSound,
    sounds,
    metronomeVolume,
    ctx,
    xSpace,
    lineHeight, leftMargin, mt
  } = useContext(SettingsContext)

  const [lessonInfo, setLessonInfo] = useState(null)
  const [beatInterval, setBeatInterval] = useState(null)
  const [noteObjs, setNoteObjs] = useState([])

  function getExerciseRecords() {
    let logData = localStorage.getItem('exerciseLogs')
      ? JSON.parse(localStorage.getItem('exerciseLogs'))
      : {}
    if (
      logData[section] &&
      logData[section][part] &&
      logData[section][part][lesson]
    )
      return logData[section][part][lesson]
    return []
  }

  function runMetronome(newSound, noteObjs, setNoteObjs) {
    const notes = [...noteObjs]
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

    setInterval(() => {
      ctx.clearRect(0, 0, 1000, 130)
      Tablature()
      console.log('updating', { notes })
      if (notes.length) {
        if (notes[0].xPos <= 0) {
          const lastNote = notes.shift()
          console.log({lastNote})
          const x = lastNote.xPos + 40
          const note = 3
          notes.push(
            new CreateNotes({
              xPos: x,
              yPos: note * lineHeight + 20,
              ctx: ctx,
              radius: 8,
            })
          )
          setNoteObjs(notes)
        }
        notes.forEach(note => {
          const xPos = note.update(xSpace / 30)
          console.log({ xPos })
        })
      }
    }, interval / 30)
  }

  useEffect(() => {
    if (!noteObjs || !ctx) return
    const newSound =
      sounds[
        metronomeSound.replace(' (default)', '').replaceAll(' ', '_')
      ].cloneNode(true)
    newSound.volume = metronomeVolume / 100

    clearTimeout(beatInterval)
    setBeatInterval(null)
    if (startLesson) runMetronome(newSound, [...noteObjs], ctx)
  }, [startLesson, metronomeVolume, metronomeSound, noteObjs, ctx])

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
          setNoteObjs={setNoteObjs}
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
