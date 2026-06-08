import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import GetRecordsByExercise from './GetRecordsByExercise'
import GetRecordsByDate from './GetRecordsByDate'

function RecordsPage() {
  const [logData, setLogData] = useState([])

  useEffect(() => {
    let storageData = localStorage.getItem('exerciseLogs')
      ? JSON.parse(localStorage.getItem('exerciseLogs'))
      : {}
    console.log({ storageData })
    setLogData(storageData)
  }, [])

  return (
    <main>
      <h2 className="records-page-title">Records Page</h2>
      <div className="list list2 scroller">
        <h2 className="listTitle">Most Recent First</h2>
        <GetRecordsByDate logData={logData} />
      </div>
      <div className="list scroller">
        <>
          <h2 className="listTitle">Listed by Exercises</h2>
          {Object.keys(logData).length > 0 ? (
            <>
              <GetRecordsByExercise
                title={'Sweep Picking'}
                section={'Sweep Picking'}
                part={'null'}
                logData={logData}
              />
              <GetRecordsByExercise
                title={'Alternate Picking'}
                section={'Picking Patterns'}
                part={'Alternate Picking'}
                logData={logData}
              />
              <GetRecordsByExercise
                title={'Economy Picking'}
                section={'Picking Patterns'}
                part={'Economy Picking'}
                logData={logData}
              />
              <GetRecordsByExercise
                section={'Picking Patterns'}
                title={'Cross Picking'}
                part={'Cross Picking'}
                logData={logData}
              />
            </>
          ) : (
            <div>No records yet</div>
          )}
        </>
      </div>
    </main>
  )
}

export default RecordsPage
