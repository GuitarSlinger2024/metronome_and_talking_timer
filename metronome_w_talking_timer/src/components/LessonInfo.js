import React, { useContext, useEffect, useState } from 'react'

import { descriptions } from '../lessonData.js'
import { SettingsContext } from '../context/SettingsContext.jsx'

function LessonInfo({
  section,
  part,
  lesson,
  lessonInfo,
  setLessonInfo,
  bpm,
  getExerciseRecords,
}) {
  const {correctTimeFormat} = useContext(SettingsContext)
  useEffect(() => {
    if (Boolean(!lesson)) {
      if (section === 'Picking Patterns' && part)
        setLessonInfo(descriptions[section][part])
      else setLessonInfo(descriptions[section])
    } else if (Boolean(lesson)) {
      // if (section === 'Picking Patterns') {
      if (descriptions[section][part]) {
        setLessonInfo(descriptions[section][part].lessons[lesson])
      } else if (section === 'Sweep Picking' && !part) {
        setLessonInfo(descriptions[section].lessons[lesson])
      }
    }
  }, [section, part, lesson])

  function makeIntoAmPm(time) {
    let hour = +time.split(' ')[3].split(':')[0]
    if (hour === 0) hour = 24
    return (
      <span>
        {hour > 12 ? hour - 12 : hour}:{time.split(' ')[3].split(':')[1]}&nbsp;
        {time.slice(-2)}
      </span>
    )
  }

  // const days = [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday'
  // ]

  // function correctTimeFormat(record) {
  //   const date = new Date(record)
  //   const dateArray = date.toString().split(' ')
  //   const time = dateArray[4].split(':')
  //   time.pop()
  //   console.log(time)
  //   const string = `${days[new Date().getDay()]}, ${dateArray[1]} ${dateArray[2]} at ${time.join(':')} ${new Date().getHours() >= 12 ? 'pm' : 'am'}`
  //   console.log({ string })
  //   return <span>{string}</span>
  // }

  function getRecordEls() {
    return (
      getExerciseRecords().length > 0 &&
      [...getExerciseRecords()]
        .reverse()
        // .splice(0, 3)
        .map((record, i) => {
          console.log(record)
          return <li key={i}>{correctTimeFormat(record)}</li>
        })
    )
  }

  return (
    <div id="lessonInfoDiv">
      <h2 className="infoTitle">
        {lessonInfo && lessonInfo.title && lessonInfo.title}
      </h2>
      {lessonInfo &&
        lessonInfo.description &&
        lessonInfo.description.map((desc, i) => <p key={i}>{desc}</p>)}
      <div className="lessonDetailsContainer">
        {lessonInfo && lessonInfo.numOfExercises && (
          <>
            <div className="lessonDetails">
              <h4>Lesson Details</h4>
              <h5>{lessonInfo.numOfExercises} exercises</h5>
              <h5>{lessonInfo.minutes} minutes each</h5>
              <h5>{bpm} bpm</h5>
            </div>
            <div className="lessonLog">
              {true && <h4>Lesson Records</h4>}

              {getExerciseRecords().length === 0 && (
                <h5>
                  This lesson has not
                  <br />
                  been worked on yet.
                </h5>
              )}
              {getExerciseRecords().length > 0 && <ul>{getRecordEls()}</ul>}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LessonInfo
