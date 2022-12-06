import { useCallback, useMemo, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { MovieResume } from 'src/data/models'

import MovieCard from '../movie-card'
import * as S from './styles'

interface SectionMoviesProps {
  data: {
    movies: MovieResume[]
    name: string
  }
}

const SectionMovies = ({ data }: SectionMoviesProps) => {
  const [marginContent, setMarginContent] = useState(0)

  const maxWidthContent = useMemo(() => data.movies.length * 220, [data.movies])

  const handleScrollMovies = useCallback(
    (direction) => {
      setMarginContent((stateMargin) => {
        const newValue = stateMargin + (direction === 'left' ? -400 : 400)

        const isError =
          maxWidthContent + newValue < window.innerWidth || newValue === 400

        return isError ? stateMargin : newValue
      })
    },
    [maxWidthContent]
  )

  return (
    <S.Container>
      <h1>{data.name}</h1>

      <S.ButtonLetf type="button" onClick={() => handleScrollMovies('right')}>
        <FaChevronLeft />
      </S.ButtonLetf>

      <S.ContentMovies marginLeft={marginContent} width={maxWidthContent}>
        {data.movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </S.ContentMovies>

      <S.ButtonRight type="button" onClick={() => handleScrollMovies('left')}>
        <FaChevronRight />
      </S.ButtonRight>
    </S.Container>
  )
}

export default SectionMovies
