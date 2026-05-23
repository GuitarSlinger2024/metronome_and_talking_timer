import React, { useRef, useEffect, useState, useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'

//  Classes
import CreateStaff from './CreateStaff'
import CreateNotes from './CreateNotes'
import { Circle } from '../../classes/circle.class'
import { TabContext } from '../../context/TabContext'

function Tablature()
{
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
    setFocusLine,
    lesson,
    canvasEl,
    canvas,
    setCanvas
  } = useContext(TabContext)
  
  const {
    hidePickDirections,
    setHidePickDirections
  } = useContext(SettingsContext)

  useEffect(() =>
  {
    console.log('start')
    // const canvasEl = document.getElementById('canvas')
    const ctx = canvasEl.current.getContext('2d')
    setCanvas(canvasEl.current)
    setCtx(ctx)
  }, [])

  return (
    <div className={`canvasContainer ${hidePickDirections ? 'noPickDir' : ''}`}>
      <canvas
      ref={canvasEl}
        id="canvas"
        width="1000"
        height="160"
        background="red"
      ></canvas>
    </div>
  )
}

export default Tablature
