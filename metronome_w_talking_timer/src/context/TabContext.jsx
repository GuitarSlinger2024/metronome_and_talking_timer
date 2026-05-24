import { createContext, useContext, useEffect, useState } from 'react'
import { SettingsContext } from './SettingsContext'
import { lessons } from '../lessonData'
import CreateStaff from '../components/notesDisplay/CreateStaff'
import CreateNotes from '../components/notesDisplay/CreateNotes'

export const TabContext = createContext()

export function TabSettings({ children }) {
  const { section, part, lesson, sounds, metronomeSound, metronomeVolume } =
    useContext(SettingsContext)
  //                    Define variable
  const xSpace = 40

  useEffect(() => {
    console.log('lesson changed here too', lesson)
  }, [lesson])

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
  const [focusLine, setFocusLine] = useState(null)
  const [focusLinePos, setFocusLinePos] = useState(0)
  const [moveTabs, setMoveTabs] = useState(false)

  useEffect(() => {
    if (!lesson) return
    const index = getLessonIndex()
    setLessonIndex(index)
  }, [lessons, lesson])

  function getLessonIndex() {
    const lessonsObj = part
      ? lessons['Picking Patterns'][part]
      : lessons['Sweep Picking']
    return lessonsObj.findIndex(lssn => lssn === lesson)
  }

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
    // ctx,
    notesOnStaff,
  ])

  useEffect(() => {
    if (!exerciseObj) return
    // console.log({ exerciseObj })
    // console.log(
    //   exerciseObj?.lessons[lessonIndex]?.exercises[exerciseIndex] || []
    // )
    setNotesOnStaff(
      exerciseObj?.lessons[lessonIndex]?.exercises[exerciseIndex] || []
    )
  }, [JSON.stringify(exerciseObj), exerciseIndex, startLesson, lesson])

  useEffect(() => {
    console.log('updating')
    if (
      !noteObjs ||
      !notesOnStaff?.length ||
      Object.keys(exerciseObj).length === 0
      // || !startLesson
    ) {
      console.log({
        1: noteObjs,
        2: notesOnStaff,
        3: !exerciseObj ? 'undef' : Object.keys(exerciseObj),
        startLesson,
      })
      return
    }
    console.log('%cupdating', 'color: green')

    setSetInterval_anime(() => {
      clearInterval(setInterval_anime)
      clearInterval(scrollInterval)
      const interval =
        section === 'Sweep Picking' &&
        (lesson === 'Changing Directions' || lesson === 'Building Speed')
          ? 750
          : 1500
      const notes = [...noteObjs]

      return setInterval(() => {
        CreateStaff(notesOnStaff[4], ctx, 15)
        if (notes.length && moveTabs) {
          notes.forEach(note =>
            note.update(((xSpace / 30) * +notesOnStaff[5]) / 2)
          )
          focusLine.draw()
        } else {
          notes.forEach(note => note.draw())
          focusLine.update((-(xSpace / 30) * +notesOnStaff[5]) / 2)
          // console.log(focusLine.xPos > leftMargin + xSpace * 10)
          // console.log(focusLine.xPos, leftMargin + xSpace * 10)
        }
      }, interval / 30 / 2)
    })
  }, [
    JSON.stringify(noteObjs),
    JSON.stringify(notesOnStaff),
    JSON.stringify(exerciseObj),
    lessonIndex,
    moveTabs,
    startLesson,
    lesson,
  ])

  //                    Functions

  //  Controls the timing for sound and animation
  function runMetronome(newSound) {
    const interval =
      section === 'Sweep Picking' &&
      (lesson === 'Changing Directions' || lesson === 'Building Speed')
        ? 750
        : 1500

    clearInterval(beatInterval)
    setBeatInterval(() => {
      let count = 0
      return setInterval(() => {
        count++
        const sound = newSound.cloneNode()
        sound.volume = metronomeVolume / 100
        sound.play()
        if (count > 4 / +notesOnStaff[5] - 1) setMoveTabs(true)
      }, interval)
    })

    clearInterval(setInterval_anime)
    clearInterval(scrollInterval)
    setScrollInterval(setInterval_anime)
    setMoveTabs(false)
  }

  useEffect(() => {
    clearInterval(scrollInterval)
    setScrollInterval(setInterval_anime)
    setMoveTabs(false)
  }, [exerciseIndex, lesson])

  return (
    <TabContext.Provider
      value={{
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
        setFocusLine,
        lesson,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}
