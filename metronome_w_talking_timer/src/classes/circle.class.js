export class Circle {
    constructor(xPos, yPos, radius, color, ctx) {
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
        this.color = color
        this.ctx = ctx
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.xPos, this.yPos + 10, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
    }
}