//        This lesson did not quite cover making it deployable.
//        Anyway, the video lesson for this can be found at:
//        https://www.youtube.com/watch?v=1NhduUZHZEQ

import express from 'express'
import path from 'path'
// import cors from 'cors'

const PORT = process.env.PORT
const __dirname = import.meta.dirname
const app = express()

// //  serve up production assets
app.use(express.static(path.join(__dirname, 'metronome_w_talking_timer', 'build')))
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'metronome_talking_timer', 'build'))
})

app.listen(PORT, () => {console.log(`Listening at: http://localhost:${PORT}`)})