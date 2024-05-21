import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Type a movie name')
      return
    }

    if (search.length < 3) {
      setError('We need at least three letters to start searching')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
