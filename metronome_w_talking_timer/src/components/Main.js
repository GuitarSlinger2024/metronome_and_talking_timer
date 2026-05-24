import '../App.css'
import { useEffect, useState } from 'react'

//  Components
import Header from './Header'
import LessonCtrls from './LessonCtrls'
import AudioCtrls from './AudioCtrls'
import RecordsPage from './records_page/RecordsPage'
// import Welcome from '../components/Welcome'
import ExerciseCtrl from './ExerciseCtrl'

//  Images & data
import mode_btn from '../_img/mode_btn.png'
import listIcon from '../_img/list_white.png'

function Main() {
  const [mode, setMode] = useState('')
  const [ready, setReady] = useState(false)
  const [showRecords, setShowRecords] = useState(false)

  useEffect(() => {
    const isStorageNew = localStorage.getItem('isStorageNew')
    if (!isStorageNew) localStorage.clear()
    localStorage.setItem('isStorageNew', true)
    const savedMode = localStorage.getItem('pickHandMode')
    setMode(savedMode || 'light')
  }, [])

  useEffect(() => {
    if (mode) localStorage.setItem('pickHandMode', mode)
  }, [mode])

  return (
    <>
      <div className={`App ${mode}`}>
        <img
          src={mode_btn}
          alt="light/dark mode"
          id="lightModeBtn"
          onClick={() => {
            setMode(mode === 'light' ? 'dark' : 'light')
          }}
        />
        <img
          src={listIcon}
          alt="see all records"
          id="listBtn"
          onClick={() => {
            setShowRecords(!showRecords)
          }}
        />
        <Header  showRecords={showRecords}/>
        <div
          id="controls"
          className={`${showRecords ? 'hideThis' : ''}`}
        >
          <LessonCtrls
            setReady={setReady}
          />
          <AudioCtrls
            mode={mode}
            ready={ready}
          />
        </div>

        <ExerciseCtrl
          showRecords={showRecords}
        />

        {showRecords && <RecordsPage />}
      </div>
    </>
  )
}

export default Main
