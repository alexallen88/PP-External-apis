import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
// export function getWelcome () {
//   return request
//     .get(`${serverURL}/welcome`)
//     .then(response => response.body)
// }
// ***   ***   ***

export function kanyeQuote () {
  return request
    .get('https://api.kanye.rest/api/v1/quotes')
    .then(response => response.body)
}
