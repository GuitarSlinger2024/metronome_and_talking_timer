import { createContext, useContext, useEffect, useState } from 'react'
import { SettingsContext } from './SettingsContext'
import { lessons } from '../lessonData'
import CreateTab from '../components/notesDisplay/CreateTab'
import CreateNotes from '../components/notesDisplay/CreateNotes'

export const TabContext = createContext()

export function TabSettings({ children }) {
  const { section, part, lesson, sounds, metronomeSound, metronomeVolume } =
    useContext(SettingsContext)
  //                    Define variable
  const xSpace = 40

  //                    useState()
  const [scrollInterval, setScrollInterval] = useState(null)
  const [beatInterval, setBeatInterval] = useState(null)
  const [setInterval_anime, setSetInterval_anime] = useState(null)
  const [ctx, setCtx] = useState(null)

  const [lineHeight] = useState(15)
  const [leftMargin] = useState(75)
  const [mt] = useState(5)
  const [notesOnStaff, setNotesOnStaff] = useState(null)

  const [startLesson, setStartLesson] = useState(false)
  const [pauseLesson, setPauseLesson] = useState(false)

  const [lessonIndex, setLessonIndex] = useState()
  const [exerciseObj, setExerciseObj] = useState(null)
  const [exerciseIndex, setExerciseIndex] = useState(null)
  const [noteObjs, setNoteObjs] = useState([])

  useEffect(() => {
    setLessonIndex(() => {
      const lessonsObj = part
        ? lessons['Picking Patterns'][part]
        : lessons['Sweep Picking']
      return lessonsObj.findIndex(lssn => lssn === lesson)
    })
  }, [lessons])

  //                    UseEffect
  useEffect(() => {
    if (!noteObjs || !ctx) return
    const newSound =
      sounds[
        metronomeSound.replace(' (default)', '').replaceAll(' ', '_')
      ].cloneNode(true)
    newSound.volume = metronomeVolume / 100

    clearTimeout(beatInterval)
    setBeatInterval(null)
    if (startLesson) runMetronome(newSound, [...noteObjs], ctx, notesOnStaff)
  }, [
    startLesson,
    metronomeVolume,
    metronomeSound,
    noteObjs,
    ctx,
    notesOnStaff,
  ])

  useEffect(() => {
    if (!exerciseObj) return
    console.log({ exerciseObj })
    setNotesOnStaff(
      exerciseObj?.lessons[lessonIndex]?.exercises[exerciseIndex] || []
    )
  }, [JSON.stringify(exerciseObj), exerciseIndex, startLesson])

  useEffect(() => {
    // console.log('updating', { noteObjs })
    if (
      !noteObjs ||
      !notesOnStaff?.length ||
      Object.keys(exerciseObj).length === 0 ||
      !startLesson
    )
      return

    setSetInterval_anime(() => {
      clearInterval(scrollInterval)
      const interval =
        section === 'Sweep Picking' &&
        (lesson === 'Changing Directions' || lesson === 'Building Speed')
          ? 750
          : 1500
      const notes = [...noteObjs]

      return setInterval(() => {
        // ctx.clearRect(0, 0, 1000, 130)  //  done in CreateTab()
        // console.log({ notesOnStaff })
        CreateTab(notesOnStaff[4], ctx, 15)
        // Tablature()
        if (notes.length) {
        //   if (notes[0].xPos <= leftMargin) {
        //     const lastNote = notes[notes.length - 1]
        //     const moveThis = notes.shift()
        //     moveThis.xPos = lastNote.xPos + xSpace
        //     notes.push(moveThis)
        //     setNoteObjs(notes)
        //   }
          notes.forEach(note => note.update((xSpace / 30) * +notesOnStaff[5] / 2 ))
        } else {
          console.log('%cno notes yet 😂', 'font-size: 20px;color:#555')
        }
      }, (interval / 30 / 2)  )
    })
  }, [
    JSON.stringify(notesOnStaff),
    JSON.stringify(exerciseObj),
    JSON.stringify(noteObjs),
  ])

  //                    Functions

  //  Controls the timing for sound and animation
  function runMetronome(newSound, noteObjs, setNoteObjs, notesOnStaff) {
    // console.log(newSound, noteObjs, setNoteObjs)
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

    clearInterval(setInterval_anime)
    clearInterval(scrollInterval)
    setScrollInterval(setInterval_anime)
  }

  useEffect(() => {
    clearInterval(scrollInterval)
    setScrollInterval(setInterval_anime)
  }, [exerciseIndex])

  return (
    <TabContext.Provider
      value={{
        runMetronome,
        leftMargin,
        startLesson,
        setStartLesson,
        pauseLesson,
        setPauseLesson,
        ctx,
        setCtx,
        exerciseObj,
        setExerciseObj,
        exerciseIndex,
        setExerciseIndex,
        lessonIndex,
        notesOnStaff,
        setNotesOnStaff,
        noteObjs,
        setNoteObjs,
        mt,
        xSpace,
        lineHeight,
        scrollInterval,
        setScrollInterval,
        setInterval_anime,
        setSetInterval_anime,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}
