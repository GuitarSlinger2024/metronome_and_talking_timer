import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

function RecordsPage() {
  const { correctTimeFormat } = useContext(SettingsContext)

  const [logData, setLogData] = useState([])

  useEffect(() => {
    let storageData = localStorage.getItem('exerciseLogs')
      ? JSON.parse(localStorage.getItem('exerciseLogs'))
      : {}
    console.log({ storageData })
    setLogData(storageData)
  }, [])

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

  function NewList({ section, part, ex }) {
    return (
      <>
        <h4 className='exerciseTitle'>{ex}</h4>
        <ul className='data'>
          {logData[section][part][ex].map(date => (
            <ul>{correctTimeFormat(date)}</ul>
          ))}
        </ul>
      </>
    )
  }

  function GetRecordsByExercise({ section, part, title }) {
    const listOfEx = []
    if (!logData[section] || !logData[section][part]) return
    logStructure[title].forEach(ex => {
      if (logData[section][part][ex]) listOfEx.push(ex)
    })
    return (
      <>
        <h3 className='sectionTitle'>{title}</h3>

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

  return (
    <main>
      <h2>Records Page</h2>
      <GetRecordsByExercise
        title={'Sweep Picking'}
        section={'Sweep Picking'}
        part={'null'}
      />
      <GetRecordsByExercise
        title={'Alternate Picking'}
        section={'Picking Patterns'}
        part={'Alternate Picking'}
      />
      <GetRecordsByExercise
        title={'Economy Picking'}
        section={'Picking Patterns'}
        part={'Economy Picking'}
      />
      <GetRecordsByExercise
        section={'Picking Patterns'}
        title={'Cross Picking'}
        part={'Cross Picking'}
      />
    </main>
  )
}

export default RecordsPage
