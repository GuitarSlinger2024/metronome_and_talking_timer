import React from 'react'
import { useEffect, useState } from 'react'

function ConvertTime({ seconds }) {
  const [tenMins, setTenMins] = useState()
  const [mins, setMins] = useState()
  const [tens, setTens] = useState()
  const [secs, setSecs] = useState()

  useEffect(() => {
    setTenMins(String(Math.floor(seconds / 60 / 10)))
    setMins(String(Math.floor(seconds / 60) % 10))
    setTens(String(Math.floor((seconds % 60) / 10)))
    setSecs(String(Math.floor((seconds % 60) % 10)))
  }, [seconds])

  return (
    <>
      <span>{tenMins}</span>
      <span>{mins}</span>
      <span className='colon'>:</span>
      <span>{tens}</span>
      <span>{secs}</span>
    </>
  )
}

export default ConvertTime
