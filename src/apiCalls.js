const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const getAllMovies = () => {
  return fetch(`${baseURL}/movies`)
    .then(response => response.json())
}

export const getOneMovie = (id) => {
  return fetch(`${baseURL}/movies/${id}`)
    .then(response => response.json())
}
