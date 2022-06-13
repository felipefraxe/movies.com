const BASE_URL = 'http://0.0.0.0:5000';

async function customFetch(BASE_URL, ROUTE, headerObj) {
  return await fetch(BASE_URL + ROUTE, headerObj)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error: ', error));
}

export function buyTickets(seats, session_id, token) {
  const ENDPOINT = '/buy';
  return customFetch(BASE_URL, ENDPOINT, {
    method: 'POST',
    headers: { 'X-Access-Token': token },
    body: JSON.stringify({ seats, session_id })
  });
}

export function fetchMovies() {
  const ENDPOINT = '/movies';
  return customFetch(BASE_URL, ENDPOINT);
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

export function fetchMovie(id) {
  const ENDPOINT = '/movie/' + id;
  return customFetch(BASE_URL, ENDPOINT);
}

export function fetchSession(id) {
  const ENDPOINT = '/session/' + id;
  return customFetch(BASE_URL, ENDPOINT);
}