import axios from 'axios';

export const BASE_URL = 'https://localhost:3000/';

export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ODU2YmQyZC1lNTU5LTRlNzQtOWIzMS01YmYyMzFmOGRlYjUiLCJpYXQiOjE2OTMyNjU2OTIsImV4cCI6MTY5Mzg3MDQ5Mn0.0kBu-hxwvGOm2Qa_KItlhXoGtsjyh2AcKlMtd4XeuT8',
  },
});
