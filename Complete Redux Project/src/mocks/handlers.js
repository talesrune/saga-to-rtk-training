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
  })
]