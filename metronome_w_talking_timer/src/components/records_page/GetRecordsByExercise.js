import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'

function GetRecordsByExercise({ section, part, title, logData }) {
  const logStructure = {
    'Sweep Picking': [
      'Sweeping Primer',
      'Inside / Outside Picking',
      'Changing Directions',
      'Building Speed',
    ],
    'Alternate Picking': [
      'Single & Adjacent Strings',
      'String Skipping',
      'Skip 2 strings',
      'Skip 3 strings',
      'Skip 4 strings',
      'Random Patterns',
    ],
    'Economy Picking': [
      'Adjacent Strings',
      'Skip 1 & 2 strings',
      'Skip 3 & 4 strings',
      'Random Patterns',
    ],
    'Cross Picking': [
      'Banjo Rolls',
      'Inside / Outside Picking',
      'Miscellaneous Exercises',
      'Random Patterns',
    ],
  }

  const { correctTimeFormat } = useContext(SettingsContext)

  function NewList({ section, part, ex }) {
    return (
      <>
        <h4 className="exerciseTitle">{ex}</h4>
        <ul className="data">
          {logData[section][part][ex].reverse().map(date => (
            <li>
              <span>{correctTimeFormat(date).split(' at ')[0]}</span>
              <span>{correctTimeFormat(date).split(' at ')[1]}</span>
            </li>
          ))}
        </ul>
      </>
    )
  }

  const listOfEx = []
  if (!logData[section] || !logData[section][part]) return
  logStructure[title].forEach(ex => {
    if (logData[section][part][ex]) listOfEx.push(ex)
  })

  return (
    <>
      <h3 className="sectionTitle">{title}</h3>

      {listOfEx.map(ex => (
        <NewList
          section={section}
          part={part}
          ex={ex}
        />
      ))}
      <ul></ul>
    </>
  )
}

export default GetRecordsByExercise
