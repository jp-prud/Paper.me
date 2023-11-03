import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';

export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ODU2YmQyZC1lNTU5LTRlNzQtOWIzMS01YmYyMzFmOGRlYjUiLCJpYXQiOjE2OTg0NDgxNDUsImV4cCI6MTY5OTA1Mjk0NX0._rtoKVJk5c0A9_YPoKWipgADJ3_XnghR4Ufto8hVoi0',
  },
});
