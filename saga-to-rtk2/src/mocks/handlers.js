// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('http://localhost:5000/users', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        "id": "5fa3",
        "name": "huh",
        "email": "what@gmail.com"
      },
      {
        "id": "1b6a",
        "name": "good",
        "email": "sir@gmai.com"
      },
      {
        "id": "23f3",
        "name": "letsgo",
        "email": "rab@gmai.com"
      }
    ])
  }),
  //add user mock, edit user mock, delete user mock needed
]