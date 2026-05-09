class CreateNotes {
  constructor({xPos, yPos, ctx, radius, fadeIn = false, color = '#000'}) {
    console.log({xPos, yPos, ctx, radius, fadeIn, color})
    this.xPos = xPos
    this.yPos = yPos
    this.radius = radius
    this.color = 'white'
    this.ctx = ctx
    this.opacity = fadeIn ? 0 : 1
    this.speed = 1 //  so I can work with it later
    this.started = false
  }

  //            called from requestAnimationFrame function
  update(distance) {
    this.xPos -= distance
    this.opacity =
      this.xPos > 200
        ? this.opacity + 0.01
        : this.xPos < this.radius * 12
        ? this.xPos / 30
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
