import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';

export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ODU2YmQyZC1lNTU5LTRlNzQtOWIzMS01YmYyMzFmOGRlYjUiLCJpYXQiOjE2OTYzNjI1MTUsImV4cCI6MTY5Njk2NzMxNX0.95oROsZqBfuVRUTPc_4BRI82c42jM0x8_Ez-VGauVf0',
  },
});
