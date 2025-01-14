// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('http://localhost:3500/Books', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
          {
            "author": "amir",
            "bookid": 1,
            "bookname": "huh",
            "rating": 5,
            "status": "Available",
            "id": "2429"
          },
          {
            "id": "3333",
            "author": "amiwr",
            "bookid": 2,
            "bookname": "wut",
            "rating": 5,
            "status": "Available"
          }
    ])
  }),
  http.get('http://localhost:5000/users', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        "id": "5fa3",
        "name": "huh",
        "email": "parent@gmail.com"
      },
      {
        "id": "1b6a",
        "name": "good",
        "email": "sirparent@gmai.com"
      },
      {
        "id": "23f3",
        "name": "letsgo",
        "email": "parent@gmai.com"
      }
    ])
  }),
]