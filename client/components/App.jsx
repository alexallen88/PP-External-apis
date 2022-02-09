import React, { useState, useEffect } from 'react'

import { kanyeQuote } from '../api'

function App () {
  const [kayneData, setKayne] = useState(null)
  // const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
  kanyeQuote()
    .then(res => {
      setKayne(res)
      return null
    })
    .catch((err) => {
      console.error(err.message)
    })

  return (
    <>
    <h1>`Kayne 🐐🐐🐐`</h1>
    {kanyeQuote.quote ? <p>{kanyeQuote.quote}</p> : <p>Kayne Quote incoming!</p>}
    </>
  )
}

export default App
