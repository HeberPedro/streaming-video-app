import { useState, useEffect } from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { Movie } from 'src/domain/models'
import featuredMovies from 'src/mocks/featured-movie'

import * as S from './styles'

const INDEX_RANDOM_VALUE = Math.floor(Math.random() * featuredMovies.length)

const FeaturedMovie = () => {
  const history = useHistory()

  const [movie, setMovie] = useState<Movie>({} as Movie)

  useEffect(() => setMovie(featuredMovies[INDEX_RANDOM_VALUE]), [])

  const handleWatchMovie = () => history.push(`/movies/${movie.id}`)

  return (
    <S.Container>
      <S.MovieBackground image={movie.imageUrl}>
        <div>
          <S.Content>
            <h1>{movie.name}</h1>
            <S.MovieInfo>
              <span>{movie.rating}% relevante</span>
              <span>{movie.releaseDate}</span>
            </S.MovieInfo>

            <p>{movie.overview}</p>
            <span>
              <strong>Gêneros:</strong> {movie.genres}
            </span>

            <S.MovieButtons>
              <S.MovieButtonPlay onClick={handleWatchMovie}>
                <FaPlay /> Assistir
              </S.MovieButtonPlay>
              <S.MovieButtonMoreAbout>
                <FaInfoCircle /> Mais informações
              </S.MovieButtonMoreAbout>
            </S.MovieButtons>
          </S.Content>
        </div>
      </S.MovieBackground>
    </S.Container>
  )
}

export default FeaturedMovie
