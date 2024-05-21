import { Movies } from './components/Movies'
import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch('')
  const { movies, getMovies, loading, errorMovies } = useMovies({
    search,
    sort
  })

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <>
      <header>
        <h1>Movie Rastreator</h1>
      </header>
      <main className='movies'>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className='input-search'
              onChange={handleChange}
              value={search}
              name='query'
              type='text'
              placeholder='Avengers, Matrix, ... '
            />
            <button className='button-search'>Search!</button>
            <label>Sort by name</label>
            <input type='checkbox' onChange={handleSort} checked={sort} />
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div>
          <span className='not-found'>{errorMovies && errorMovies}</span>
          {loading ? <p>loading...</p> : <Movies movies={movies} />}
        </div>
      </main>
    </>
  )
}

export default App
