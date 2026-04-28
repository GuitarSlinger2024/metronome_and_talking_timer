import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../context/SettingsContext'

//  Images
import playBtn from '../_img/play-btn.png'

//  Components
import Dropdown from './Dropdown'
import Checkbox from './Checkbox'
import VolumeCtrl from './VolumeCtrl'

function AudioCtrls({
  mode,
  ready,
  setStartLesson,
  startLesson,
  pauseLesson,
  setPauseLesson,
}) {
  const {
    showAudioMenu,
    setShowAudioMenu,
    useLongDesc,
    setUseLongDesc,
    hidePickDirections,
    setHidePickDirections,
    metronomeSound,
    setMetronomeSound,
  } = useContext(SettingsContext)

  return (
    <section className="settings">
      <Dropdown
        showList={showAudioMenu}
        setShowList={setShowAudioMenu}
        label="Sound: "
        type="sound"
        placeHolder="Choose A Sound"
        options={[
          <div className="soundOption">
            <span className="soundName">Bassdrum</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Bongo 1</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Bongo 2</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Bongo 3</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Bongo 4</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Bongo 5</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Bongo 6</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Smack</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Snaredrum 1</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Snaredrum 2</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Snaredrum 3</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Wood Block</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
          <div className="soundOption">
            <span className="soundName">Wood Metronome (default)</span>
            <span className="playBtn">
              <img
                src={playBtn}
                alt="play button"
              />
            </span>
          </div>,
        ]}
        currentOpt={metronomeSound}
        setOption={setMetronomeSound}
      />

      <div className="audioCtrls">
        <VolumeCtrl />

        <Checkbox
          label="Use more verbose audio descriptions"
          mode={mode}
          checked={useLongDesc}
          setChecked={setUseLongDesc}
          showBox="block"
          radio={[]}
          showNewMsg={null}
          setCurrentListName={null}
        />
        <Checkbox
          label="Hide pick directions"
          mode={mode}
          checked={hidePickDirections}
          setChecked={setHidePickDirections}
          showBox="block"
          radio={[]}
          showNewMsg={null}
          setCurrentListName={null}
        />
      </div>

      <div id="buttons">
        {/*  Start button  */}
        {!startLesson && (
          <button
            id="start"
            disabled={!ready}
            onClick={() => {
              setStartLesson(true)
              setPauseLesson(false)
            }}
          >
            Begin
          </button>
        )}

        {/*  Pause button  */}
        {startLesson && !pauseLesson && (
          <button
            id="pause"
            onClick={() => {
              setPauseLesson(true)
            }}
          >
            Pause
          </button>
        )}

        {/*  Continue button  */}
        {startLesson && pauseLesson && (
          <button
            id="continue"
            onClick={() => {
              setPauseLesson(false)
            }}
          >
            Continue
          </button>
        )}

        {/*  Quit button  */}
        <button
          id="quit"
          disabled={!startLesson}
          onClick={() => {
            setStartLesson(false)
            setPauseLesson(false)
            speechSynthesis.cancel()
          }}
        >
          Quit
        </button>
      </div>
    </section>
  )
}

export default AudioCtrls
