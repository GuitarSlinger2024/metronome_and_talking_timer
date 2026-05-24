import React, { useRef, useEffect, useState, useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import upstroke from '../_img/music_notations/white_upstroke.png'
import downstroke from '../_img/music_notations/white_downstroke.png'
import CreateNotes from './notes_display/CreateNotes'
import CreateStaff from './notes_display/CreateStaff'

//  Classes
import { Circle } from '../classes/circle.class'

function Tablature({ notesOnStaff, xSpace, strokes })
{
  const { hidePickDirections, setHidePickDirections } =
    useContext(SettingsContext)

  const canvasRef = useRef(null)

  const [canvas, setCanvas] = useState(null)
  const [ctx, setCtx] = useState(null)

  //  Not sure how these are used...  this is maybe temporary.
  const [xSpacing] = useState(xSpace)
  const [lineHeight] = useState(15)
  const [leftMargin] = useState(40)
  const [mt] = useState(5)

  useEffect(() =>
  {
    const canvasEl = document.getElementById('canvas')
    const ctx = canvasEl.getContext('2d')
    setCanvas(canvasEl)
    setCtx(ctx)
  }, [])

  useEffect(() =>
  {
    if (!ctx || !canvas) return
    canvas.width = 1000
    canvas.height = 130
    ctx.lineWidth = 2.5
    ctx.strokeStyle = 'white'
  }, [ctx, canvas])

  useEffect(() =>
  {
    if (!notesOnStaff) return
    console.log({notesOnStaff})
    CreateStaff({
      signature: notesOnStaff[4],
      ctx: ctx,
      lineHeight: lineHeight
    })
    render_tablature({
      notesOnStaff: notesOnStaff[1],
      strokes: notesOnStaff[2],
    })
  }, [notesOnStaff, hidePickDirections])

  function render_tablature({notesOnStaff, strokes = ''})
  {
    console.log('creating tablature');

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

    focusLine.focusLine()

    // // ctx.clearRect(0, 0, 1000, 1000)
    // //  Draw notes and lines on the staff
    // for (let x = 0; x < notesOnStaff.length; x++)
    // {
    //   const note = notesOnStaff.charAt(x)
    //   if (note >= 1 && note <= 6) drawEachNote(x, note)
    //   else if (note === '-')
    //   {
    //     verticalLine(x)
    //   }
    // }
    //  Draw up & down-strokes
    for (let x = 0; x < strokes.length; x++)
    {
      const direction = strokes.charAt(x)
      if (direction === 'u' || direction === 'd')
      {
        if (!hidePickDirections) upAndDownstrokes(x, direction)
      } else if (direction === 'e' && !hidePickDirections) etcetera(x)
    }
    // horizontalLines()
  }

  function etcetera(space)
  {
    ctx.font = 'italic 2rem Times'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'

    ctx.fillText('etc.', space * xSpacing + leftMargin, 10 + mt)
  }

  function verticalLine(space)
  {
    ctx.beginPath()
    ctx.moveTo(space * xSpacing + leftMargin, lineHeight + 20 + 10)
    ctx.lineTo(space * xSpacing + leftMargin, 6 * lineHeight + 20 + 10)
    ctx.stroke()
    ctx.closePath()
  }

  function horizontalLines()
  {
    for (let line = 1; line <= 6; line++)
    {
      ctx.beginPath()
      ctx.moveTo(0, line * lineHeight + 20 + 10)
      ctx.lineTo(1000, line * lineHeight + 20 + 10)
      ctx.stroke()
      ctx.closePath()
    }
  }

  async function upAndDownstrokes(space, char)
  {
    const blob = char === 'u' ? upstroke : downstroke
    //  The only thing needed for .src = base64 to work is for the image to load
    const image = await Base64ToImage(blob)
    // image.src = URL.createObjectURL(blobObj)
    const imgWidth = 20
    ctx.drawImage(
      image,
      space * xSpacing + leftMargin - imgWidth / 2,
      mt,
      imgWidth,
      imgWidth
    )
  }

  async function Base64ToImage(base64img, callback)
  {
    return new Promise((res, rej) =>
    {
      var img = new Image()
      img.onload = function ()
      {
        res(img)
      }
      img.src = base64img
    })
  }

  function drawEachNote(space, line)
  {
    const circ = new Circle(
      space * xSpacing + leftMargin,
      line * lineHeight + 20,
      7,
      'white',
      ctx
    )
    circ.draw()
  }

  return (
    <div
      className={`canvasContainer ${hidePickDirections ? 'noPickDir' : ''}`}
    >
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
