import React from 'react'

function CreateStaff({signature, ctx, lineHeight}) {
  console.log('creating staff', {signature})
  ctx.clearRect(0, 0, 1000, 130)
  //  Time Signature
  ctx.font = 'bold 3rem Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'white'
  ctx.strokeStyle = 'white'
  // console.log({
  //   sig1: signature.split('/')[0],
  //   sig2: signature.split('/')[1],
  // })
  ctx.fillText(signature.split('/')[0], 20, 67)
  ctx.fillText(signature.split('/')[1], 20, 108)

  //  Horizontal Lines
  ctx.strokeStyle = '#fff7'
  for (let line = 1; line <= 6; line++) {
    ctx.beginPath()
    ctx.moveTo(0, line * lineHeight + 20 + 10)
    ctx.lineTo(1000, line * lineHeight + 20 + 10)
    ctx.stroke()
    ctx.closePath()
  }
}

export default CreateStaff