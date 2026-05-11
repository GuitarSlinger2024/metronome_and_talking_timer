import { useContext } from "react"
import { TabContext } from "../../context/TabContext"


class CreateNotes {
  constructor({xPos, yPos, ctx, radius, leftMargin, color = '#000'}) {
    // console.log({xPos, yPos, ctx, radius, fadeIn, color})
    this.ctx = ctx
    this.xPos = xPos
    this.yPos = yPos
    this.radius = radius
    this.color = 'white'
    this.canvasLen = 1000
    this.opacity = xPos > this.canvasLen ? 0 : 1
    this.speed = 1 //  so I can work with it later
    this.started = false
    this.leftMargin = leftMargin
  }

  //            called from requestAnimationFrame function
  update(distance) {
    this.xPos -= distance
    // if ((this.xPos - this.leftMargin) > 200) {}
    this.opacity =
      (this.xPos - this.leftMargin > 200 && this.xPos < this.canvasLen)
        ? this.opacity + 0.01
        : (this.xPos - this.leftMargin) < this.radius * 12
        ? (this.xPos - this.leftMargin) / 30
        : this.opacity
    this.opacity =
      this.opacity < 1 ? this.opacity : this.opacity < 0 ? 0 : this.opacity
    this.color = `rgba(255, 255, 255, ${this.opacity})`
    this.draw()
    return this.xPos
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.arc(this.xPos, this.yPos + 10, this.radius, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.closePath()
  }
}

export default CreateNotes
