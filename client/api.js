import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function kanyeQuote () {
  return request
    .get('https://api.kanye.rest/api/v1/kaynequotes')
    .then(response => response.body)
}
