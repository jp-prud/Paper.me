import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';

export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZjUyZmVkYS0xZTc4LTQ4OGMtOWNlOC05ZDExNWEwNzFkZmEiLCJpYXQiOjE2OTU2MDM4NDQsImV4cCI6MTY5NjIwODY0NH0.Ju8oXLKvEH3aaJrWbrFaWKwKM6aOQjv9CqluLnqncdQ',
  },
});
