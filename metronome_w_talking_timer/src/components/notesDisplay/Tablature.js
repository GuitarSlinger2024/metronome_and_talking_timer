import React, { useRef, useEffect, useState, useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'

//  Images
import upstroke from '../../_img/white_upstroke.png'
import downstroke from '../../_img/white_downstroke.png'

//  Classes
import CreateTab from './CreateTab'
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
  } = useContext(TabContext)
  const { hidePickDirections, setHidePickDirections } =
    useContext(SettingsContext)

  const [canvas, setCanvas] = useState(null)

  // const [theNotes, setTheNotes] = useState([])
  // const [directions, setDirections] = useState([])

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
    console.log('about to render tab')
    render_tablature({
      notesOnStaff: notesOnStaff[1], //  up to where it repeats
      timeSig: notesOnStaff[4], //  example: 3/4
      notesPerBeat: notesOnStaff[3],
      pickDir: notesOnStaff[2] || '',
    })
    CreateTab(notesOnStaff[4], ctx, lineHeight)
  }, [JSON.stringify(notesOnStaff), ctx])
  // }, [notesOnStaff, hidePickDirections])

  function render_tablature({ notesOnStaff, timeSig, notesPerBeat, pickDir }) {
    console.log({ notesOnStaff, timeSig, notesPerBeat, pickDir, ctx })
    // ctx.clearRect(0, 0, 1000, 1000)

    const noteList = [...notesOnStaff]
    console.log({noteList})
    let notes = []
    while (notes.length < 24) notes.push(...noteList)
    const objs = []
    const directions = [...pickDir]
    console.log({ notes }, { directions })
    const numOfBeats = +notesPerBeat
    let numOfSpaces = notes.length
    //  Draw notes and lines on the staff
    for (let x = 0; x < numOfSpaces; x++) {
      // const note = notes.shift()
      // notes.push(note)
      
      // space * xSpace + leftMargin,
      // line * lineHeight + 20,
      // 7,
      // 'white',
      // ctx
      const note = notes[x]
      if (note >= 1 && note <= 6) {
        // console.log({ xPos: x * xSpace + leftMargin })
        // console.log({ x, xSpace, leftMargin, lineHeight })
        const newNote = new CreateNotes({
          xPos: x * xSpace + leftMargin,
          yPos: note * lineHeight + 20,
          ctx: ctx,
          radius: 8,
          leftMargin,
        })
        objs.push(newNote)
      }

      // xPos, yPos, ctx, radius, fadeIn = false, color = '#000'

      // if (note >= 1 && note <= 6) drawEachNote(x, note)
      if (x > 0 && x % numOfBeats === 0) verticalLine(x - 0.5)
    }
    console.log('%cSetting note objs', 'font-weight: 900', { objs })
    setNoteObjs(objs)
    //  Draw up & down-strokes
    const strokes = [...pickDir]
    for (let x = 0; x < numOfSpaces; x++) {
      const direction = strokes.shift()
      strokes.push(direction)
      if (direction === 'u' || direction === 'd') {
        if (!hidePickDirections) upAndDownstrokes(x, direction)
      } else if (direction === 'e' && !hidePickDirections) etcetera(x)
    }
  }

  function etcetera(space) {
    ctx.font = 'italic 2rem Times white'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'

    ctx.fillText('etc.', space * xSpace + leftMargin, 10 + mt)
  }

  function verticalLine(space) {
    ctx.strokeStyle = '#fff7'
    ctx.beginPath()
    ctx.moveTo(space * xSpace + leftMargin, lineHeight + 20 + 10)
    ctx.lineTo(space * xSpace + leftMargin, 6 * lineHeight + 20 + 10)
    ctx.stroke()
    ctx.closePath()
  }

  async function upAndDownstrokes(space, char) {
    const blob = char === 'u' ? upstroke : downstroke
    //  The only thing needed for .src = base64 to work is for the image to load
    const image = await Base64ToImage(blob)
    // image.src = URL.createObjectURL(blobObj)
    const imgWidth = 20
    ctx.drawImage(
      image,
      space * xSpace + leftMargin - imgWidth / 2,
      mt,
      imgWidth,
      imgWidth
    )
  }

  async function Base64ToImage(base64img, callback) {
    return new Promise((res, rej) => {
      var img = new Image()
      img.onload = function () {
        res(img)
      }
      img.src = base64img
    })
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
