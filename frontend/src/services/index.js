const BASE_URL = 'http://0.0.0.0:5000';

async function customFetch(BASE_URL, ROUTE, headerObj) {
  return await fetch(BASE_URL + ROUTE, headerObj)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error: ', error));
}

export function fetchMovies() {
  const ENDPOINT = '/movies';
  const token = localStorage.getItem('token');
  return customFetch(BASE_URL, ENDPOINT, {
    method: 'GET',
    headers: { 'x-access-tokens': token }
  });
}

export function login(email, password) {
  const ENDPOINT = '/login';
  return customFetch(BASE_URL, ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function register(firstName, lastName, email, emailConfirmation, password) {
  const ENDPOINT = '/register';
  return customFetch(BASE_URL, ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName, email, emailConfirmation, password })
  });
}