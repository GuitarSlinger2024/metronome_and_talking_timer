import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'

function GetRecordsByDate({ logData }) {
  const { correctTimeFormat } = useContext(SettingsContext)

  const [listByDate, setListByDate] = useState({})

  useEffect(() => {
    const list = {}
    if (Object.keys(logData).length === 0) return
    Object.keys(logData).forEach(section => {
      Object.keys(logData[section]).forEach(part => {
        const partName = part !== 'null' ? part : section
        Object.keys(logData[section][part]).forEach(exercise => {
          logData[section][part][exercise].forEach(date => {
            const day = correctTimeFormat(date)
            .split(' at ')[0]
            .split(',')[1]
            .trim()
            if (!list[day]) list[day] = []
            list[day].push({
              exercise,
              partName,
              time: correctTimeFormat(date),
            })
          })
        })
      })
    })
    setListByDate(list)
  }, [logData])

  return (
    <ul>
      {Object.keys(listByDate).length ?
        Object.keys(listByDate)
          .sort()
          .reverse()
          .map((date, d) => {
            return (
              <>
                <h3 className="day">{`${
                  date
                } - ${listByDate[date][0].time.split(',')[0]}`}</h3>
                <ul
                  key={d}
                  className="data"
                >
                  {listByDate[date].map((exercise, e) => {
                    // console.log({ time: exercise.time.split(' at ')[1] })
                    return (
                      <li key={e}>
                        {`${exercise.time.split(' at ')[1]} - 
                        ${exercise.exercise} (${exercise.partName.replace(
                          ' Picking',
                          ''
                        )})`}
                      </li>
                    )
                  })}
                </ul>
              </>
            )
          }) : <div>No records yet</div>}
    </ul>
  )
}

export default GetRecordsByDate
