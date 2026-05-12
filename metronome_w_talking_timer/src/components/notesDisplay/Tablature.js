import React, { useRef, useEffect, useState, useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'

//  Classes
import CreateStaff from './CreateStaff'
import CreateNotes from './CreateNotes'
import { Circle } from '../../classes/circle.class'
import { TabContext } from '../../context/TabContext'

function Tablature() {
  //  xSpace is distance between notes (space, x-axis)
  const {
    xSpace,
    leftMargin,
    ctx,
    setCtx,
    setNoteObjs,
    notesOnStaff,
    lineHeight,
    mt,
    setFocusLine
  } = useContext(TabContext)
  const { hidePickDirections, setHidePickDirections } =
    useContext(SettingsContext)

  const [canvas, setCanvas] = useState(null)

  useEffect(() => {
    console.log('start')
    const canvasEl = document.getElementById('canvas')
    const ctx = canvasEl.getContext('2d')
    setCanvas(canvasEl)
    setCtx(ctx)
  }, [])

  useEffect(() => {
    // console.log('canvas and ctx are set up')
    if (!ctx || !canvas) return
    canvas.width = 1000
    canvas.height = 130
    ctx.lineWidth = 2.5
    ctx.strokeStyle = 'white'
  }, [ctx, canvas])

  //           useEffect:  New staff is set-up
  useEffect(() => {
    if (!notesOnStaff || !ctx) return
    console.log('Creating the staff')
    CreateStaff(notesOnStaff[4], ctx, lineHeight)
    console.log('about to render tab')
    render_tablature({
      notesOnStaff: notesOnStaff[1], //  up to where it repeats
      timeSig: notesOnStaff[4], //  example: 3/4
      notesPerBeat: notesOnStaff[3],
      pickDir: notesOnStaff[2] || '',
    })
  }, [JSON.stringify(notesOnStaff), ctx])
  // }, [notesOnStaff, hidePickDirections])

  function render_tablature({ notesOnStaff, timeSig, notesPerBeat, pickDir }) {
    console.log({ notesOnStaff, timeSig, notesPerBeat, pickDir, ctx })
    //  Create focusLine
    const focusLine = new CreateNotes({
      xPos: leftMargin,
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
    const directionsList = [...pickDir]
    console.log({ noteList })
    console.log({ directionsList })
    let notes = []
    while (notes.length < 24) notes.push(...noteList)
    let directions = []
    while (directions.length < 24) directions.push(...directionsList)
    const objs = []
    //  Create notes, rests & pick directions
    const numOfBeats = +notesPerBeat
    let numOfSpaces = notes.length
    for (let spaceNum = 0; spaceNum < numOfSpaces; spaceNum++) {
      //  Draw notes
      const note = notes[spaceNum]
      const newNote = new CreateNotes({
        xPos: spaceNum * xSpace + leftMargin,
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
        xPos: spaceNum * xSpace + leftMargin,
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
      if (spaceNum > 0 && spaceNum % numOfBeats === numOfBeats - 1) {
        // verticalLine(spaceNum - 0.5)
        const barLine = new CreateNotes({
          xPos: spaceNum * xSpace + leftMargin - 0.5,
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
      }
    }
    console.log('%cSetting note objs', 'font-weight: 900', { objs })
    setNoteObjs(objs)
  }

  return (
    <div className={`canvasContainer ${hidePickDirections ? 'noPickDir' : ''}`}>
      <canvas
        id="canvas"
        width="1000"
        height="160"
        background="red"
      ></canvas>
    </div>
  )
}

export default Tablature
