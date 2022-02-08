import React, { useState, useEffect } from 'react'

import { getWelcome, getMovie } from '../api'

function App () {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [movie, setMovie] = useState({ })

  useEffect(() => {
    getWelcome()
      .then(res => {
        setWelcomeStatement(res.statement)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  getMovie()
    .then(res => {
      setMovie(res)
      return null
    })
    .catch((err) => {
      console.error(err.message)
    })

  return (
    <h1>{welcomeStatement}</h1>
    {movie.value ? <p>{movie.value}</p> : <p>Movies Movies Movies!</p>}
  )
}

export default App
