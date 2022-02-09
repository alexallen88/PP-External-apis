import React, { useState, useEffect } from 'react'

import { kanyeQuote } from '../api'

function App () {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [movie, setKayne] = useState({ })

  // useEffect(() => {
  //   getWelcome()
  //     .then(res => {
  //       setWelcomeStatement(res.statement)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

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
    <h1>{welcomeStatement}</h1>
    <h2>{}</h2>
  )
}

export default App
