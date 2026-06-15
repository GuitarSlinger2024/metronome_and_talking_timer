import React, { useContext, useEffect, useState } from 'react'

import { descriptions } from '../lessonData.js'
import { SettingsContext } from '../context/SettingsContext.jsx'

function LessonInfo({ lessonInfo, setLessonInfo, bpm, getExerciseRecords })
{
  const { correctTimeFormat, section, part, lesson, setPart, setLesson } =
    useContext(SettingsContext)
  useEffect(() =>
  {
    if (section === 'Intro')
    {
      setPart(null)
      setLesson(null)
    }
    if (!descriptions || !section || section === 'Intro') return
    if (Boolean(!lesson))
    {
      if (section === 'Picking Patterns' && part)
      {
        const descript = descriptions[section][part]
        if (typeof descript.description[0] === 'object')
          descript.description = descript.description[0]
        setLessonInfo(descript)
      }
      else setLessonInfo(descriptions[section])
    } else if (Boolean(lesson))
    {
      // if (section === 'Picking Patterns') {
      if (descriptions[section][part])
      {
        setLessonInfo(descriptions[section][part].lessons[lesson])
      } else if (section === 'Sweep Picking' && !part)
      {
        setLessonInfo(descriptions[section].lessons[lesson])
      }
    }
  }, [section, part, lesson])

  function makeIntoAmPm(time)
  {
    let hour = +time.split(' ')[3].split(':')[0]
    if (hour === 0) hour = 24
    return (
      <span>
        {hour > 12 ? hour - 12 : hour}:{time.split(' ')[3].split(':')[1]}&nbsp;
        {time.slice(-2)}
      </span>
    )
  }

  function getRecordEls()
  {
    return (
      getExerciseRecords().length > 0 &&
      [...getExerciseRecords()]
        .reverse()
        // .splice(0, 3)
        .map((record, i) =>
        {
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
        lessonInfo.description.map((desc, i) =>
        {
          console.log(i)
          console.log(desc)
          console.log(lessonInfo.description)
          return (<p key={i}>{desc}</p>)
        })}
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
