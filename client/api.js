import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}
// ***   ***   ***

export function getMovie () {
  return request
    .get('https://api.themoviedb.org/api/v1')
    .then(response => response.body)
}
