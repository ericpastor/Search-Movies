import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setErrorMovies(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      if (!newMovies && search.length >= 3) {
        throw new Error(`We don't have "${search}" movie in our sistem. Try with another one!`)
      }
      setMovies(newMovies)
    } catch (e) {
      setErrorMovies(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? movies && [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, errorMovies }
}
