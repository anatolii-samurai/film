

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ZlYmQ0NjI5ZDdiNTk0YTJiMmI3ZTZhOWY0YWMxMiIsInN1YiI6IjY0ZDNkYjY3MDIxY2VlMDExYzhmMWUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xjPCqTHf4tpkdc9e_Le9wFQLCGTXHZUbr5aafP3sTtA'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};

async function getGenresMovies() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru'
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      return result
    }
    throw new Error(`${result.status_message}`)
  } catch (e) {
    console.error(e)
  }

}

export { getGenresMovies }





   
      