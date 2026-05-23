import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { SettingsContext } from './SettingsContext'
import { lessons, exercises } from '../lessonData'
import CreateStaff from '../components/notesDisplay/CreateStaff'
import CreateNotes from '../components/notesDisplay/CreateNotes'

export const TabContext = createContext()

export function TabSettings({ children }) {
  const { section, part, lesson, sounds, metronomeSound, metronomeVolume } =
    useContext(SettingsContext)
  //                    Define variable
  const xSpace = 40

  const canvasEl = useRef(null)

  useEffect(() =>
  {
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
    const index = getLessonIndex()
    setLessonIndex(index)
  }, [lessons])

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
    console.log({exerciseObj})
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

  const [canvas, setCanvas] = useState(null)

  useEffect(() =>
  {
    // console.log('canvas and ctx are set up')
    if (!ctx || !canvas) return
    canvas.width = 1000
    canvas.height = 130
    ctx.lineWidth = 2.5
    ctx.strokeStyle = 'white'
  }, [ctx, canvas])

  useEffect(() =>
  {
    console.log('%clesson changed', 'font-weight: 900;color:cyan', lesson)
    console.log({notesOnStaff, ctx})
  }, [lesson])

  //           useEffect:  New staff is set-up
  useEffect(() =>
  {
    console.log({notesOnStaff, ctx})
    if (!notesOnStaff || !ctx) return
    console.log('Creating the staff')
    CreateStaff(notesOnStaff[4], ctx, lineHeight)
    console.log('about to render tab')
    render_tablature({
      notesOnStaff: notesOnStaff[1], //  up to where it repeats
      timeSig: notesOnStaff[4], //  example: 3/4
      notesPerBar: notesOnStaff[3],
      pickDir: notesOnStaff[2] || '',
      notesPerBeat: +notesOnStaff[5]
    })
  }, [ notesOnStaff, ctx, lesson, lessons, startLesson, JSON.stringify(notesOnStaff),])


  function render_tablature({ notesOnStaff, timeSig, notesPerBar, pickDir, notesPerBeat })
  {
    console.log({ notesOnStaff, timeSig, notesPerBar, pickDir, ctx, notesPerBeat })
    //  Create focusLine
    let xPos = notesPerBeat === 3 ? xSpace : 0
    xPos += leftMargin
    const focusLine = new CreateNotes({
      xPos: xPos,
      yPos: null,
      ctx: ctx,
      xSpace,
      leftMargin,
      note: 'focusLine',
      lineHeight,
      mt,
    })

    setFocusLine(focusLine)

    //  Get enough notes and pick directions
    const noteList = [...notesOnStaff]
    let directionsList = [...pickDir]
    console.log({ noteList })
    console.log({ directionsList })
    let notes = []
    while (notes.length < 24) notes.push(...noteList)
    let directions = []
    while (directions.length < notes.length)
    {
      directions.push(directionsList[0])
      directionsList = [...directionsList.splice(1), directionsList[0]]
    }
    const objs = []
    //  Create notes, rests & pick directions
    const numOfBeats = +notesPerBar
    let numOfSpaces = notes.length
    for (let spaceNum = 0; spaceNum < numOfSpaces; spaceNum++)
    {
      //  Draw notes
      const note = notes[spaceNum]
      const newNote = new CreateNotes({
        xPos: (spaceNum + 4) * xSpace + leftMargin,
        yPos: note * lineHeight + 20,
        ctx: ctx,
        xSpace,
        leftMargin,
        note,
        numOfSpaces,
        lineHeight,
        mt,
      })
      objs.push(newNote)

      //  Draw pick directions
      const direction = directions[spaceNum]
      const newDirection = new CreateNotes({
        xPos: (spaceNum + 4) * xSpace + leftMargin,
        ctx: ctx,
        xSpace,
        leftMargin,
        note: direction,
        numOfSpaces,
        lineHeight,
        mt,
      })
      objs.push(newDirection)

      // Draw barlines
      if (numOfBeats !== 0 && (spaceNum) % numOfBeats === (numOfBeats) % numOfBeats)
      {
        console.log('%c - ' + spaceNum + ' - ' + numOfBeats, 'color:green')
        // verticalLine(spaceNum - 0.5)
        const barLine = new CreateNotes({
          xPos: (spaceNum + 3) * xSpace + leftMargin - 0.5,
          yPos: null,
          ctx: ctx,
          xSpace,
          leftMargin,
          note: 'barLine',
          numOfSpaces,
          lineHeight,
          mt,
        })
        objs.push(barLine)
      } else
      {
        console.log('%c - ' + spaceNum + ' - ' + numOfBeats, 'color:red')
      }
    }
    console.log('%cSetting note objs', 'font-weight: 900', { objs })
    setNoteObjs(objs)
  }

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
        // console.log({focusLinePos})
        // console.log(focusLinePos, leftMargin + xSpace * 8)
        // if (focusLinePos >= leftMargin + xSpace * 8) {
        if (count > 4 / +notesOnStaff[5] - 1) {
          setMoveTabs(true)
          // console.log(notesOnStaff)
        }
        // } else {
        //   setFocusLinePos(focusLinePos + 1)
        // }
      }, interval)
    })

    clearInterval(setInterval_anime)
    clearInterval(scrollInterval)
    setScrollInterval(setInterval_anime)
  }

  useEffect(() => {
    clearInterval(scrollInterval)
    setScrollInterval(setInterval_anime)
    setMoveTabs(false)
  }, [exerciseIndex, lesson])

  useEffect(() =>
  {
    // exerciseObj includes all the lesson for the current section
    console.log('%c SETTING ExerciseObj', 'color: purple; font-size: 20px; font-weight: 700')
    setExerciseObj(exercises[section][part] || exercises[section])
    console.log(exercises[section][part] || exercises[section])
    setExerciseIndex(0)
  }, [section, part, lesson])

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
        canvasEl,
        canvas,
        setCanvas
      }}
    >
      {children}
    </TabContext.Provider>
  )
}
