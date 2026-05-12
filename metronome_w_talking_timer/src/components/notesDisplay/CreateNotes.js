import { useContext } from 'react'
import { TabContext } from '../../context/TabContext'

//  Images
import upstroke from '../../_img/white_upstroke.png'
import downstroke from '../../_img/white_downstroke.png'
import dotQuarterRest from '../../_img/music_notations/white/dotQuarterRest.png'
import eighthRest from '../../_img/music_notations/white/eighthRest.png'
import dotEighthRest from '../../_img/music_notations/white/dotEighthRest.png'

class CreateNotes {
  constructor({
    xPos,
    yPos,
    leftMargin,
    ctx,
    note,
    numOfSpaces,
    xSpace,
    lineHeight,
    mt,
  }) {
    // console.log({xPos, yPos, ctx, fadeIn, color})
    this.ctx = ctx
    this.xPos = xPos
    this.yPos = yPos
    this.color = 'white'
    this.canvasLen = 1000
    // this.started = false  //  not currently used
    this.leftMargin = leftMargin
    this.note = note
    this.numOfSpaces = numOfSpaces
    this.xSpace = xSpace
    this.lineHeight = lineHeight
    this.image = null
    this.mt = mt
    this.width = 8 //  Just for notes (circles)
    this.opacity = xPos >= this.canvasLen - this.width ? 0 : 1

    if (this.note === 'u' || this.note === 'd') this.initStrokes()
    if (['e', 'E', 'q', 'Q'].includes(this.note)) this.initRest()
    //  e - eightRest, E - dotEightRest, q - quarterRest, Q - dotQuarterRest
  }

  async initStrokes() {
    console.log('Initializing rest image, right??? .......')
    const blob = this.note === 'u' ? upstroke : downstroke
    //  The only thing needed for .src = base64 to work is for the image to load
    this.image = await this.Base64ToImage(blob)
    this.width = 20
  }

  async initRest() {
    const blob = this.note === 'e' ? eighthRest : this.note === 'Q' ? dotQuarterRest : dotEighthRest
    //  The only thing needed for .src = base64 to work is for the image to load
    this.image = await this.Base64ToImage(blob)
    this.width = this.note === 'e' ? 30 : 40
  }

  //            called from requestAnimationFrame function
  update(distance) {
    this.xPos -= distance
    // if ((this.xPos - this.leftMargin) > 200) {}
    this.opacity =
      this.xPos - this.leftMargin > 200 && this.xPos < this.canvasLen - 15
        ? (this.canvasLen - 15 - this.xPos) / 30
        : this.xPos - this.leftMargin < this.width * 12
        ? (this.xPos - this.leftMargin) / 30
        : this.opacity
    this.opacity = this.opacity > 1 ? 1 : this.opacity < 0 ? 0 : this.opacity
    this.color = `rgba(255, 255, 255, ${this.opacity})`
    this.draw()

    //  Check if xPos < this.leftMargin - this.width
    if (this.xPos < this.leftMargin) this.xPos += this.xSpace * this.numOfSpaces
  }

  draw() {
    if (this.note >= 1 && this.note <= 6) this.drawNote()
    if (this.note === 'barLine') this.verticalLine()
    if (['u', 'd'].includes(this.note)) this.upAndDownstrokes()
    if (['e', 'E', 'q', 'Q'].includes(this.note)) this.drawRest()
  }

  drawNote() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.arc(this.xPos, this.yPos + 10, this.width, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.closePath()
  }

  verticalLine() {
    this.ctx.strokeStyle = '#fff7'
    this.ctx.beginPath()
    this.ctx.moveTo(this.xPos + this.xSpace / 2, this.lineHeight + 20 + 10)
    this.ctx.lineTo(this.xPos + this.xSpace / 2, 6 * this.lineHeight + 20 + 10)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  async upAndDownstrokes() {
    // image.src = URL.createObjectURL(blobObj)
    this.ctx.drawImage(
      this.image,
      // space * xSpace + leftMargin - this.width / 2,
      this.xPos - this.width / 2,
      this.mt,
      this.width,
      this.width
    )
  }

  async drawRest() {
    // image.src = URL.createObjectURL(blobObj)
    this.ctx.drawImage(
      this.image,
      // space * xSpace + leftMargin - this.width / 2,
      this.xPos - this.width / 2,
      20 + 10 + this.lineHeight * 2,
      this.width,
      this.lineHeight * 3
    )
  }

  async Base64ToImage(base64img, callback) {
    return new Promise((res, rej) => {
      var img = new Image()
      img.onload = function () {
        res(img)
      }
      img.src = base64img
    })
  }
}

export default CreateNotes
