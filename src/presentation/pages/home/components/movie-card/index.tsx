import { FaPlay, FaThumbsDown, FaThumbsUp, FaPlus } from 'react-icons/fa'

import { MovieResume } from 'src/data/models'

import * as S from './styles'

interface MovieCardProps {
  data: MovieResume
}

const MovieCard = ({ data }: MovieCardProps) => (
  <S.Container>
    <img
      src={`https://image.tmdb.org/t/p/w300${data.posterPath}`}
      alt={`Capa do filme/seriado ${data.name}`}
    />
    <S.Card>
      <strong>{data.name}</strong>
      <p>{data.overview}</p>

      <S.CardControll>
        <button type="button">
          <FaPlay /> Assistir
        </button>
        <span>
          <FaPlus />
        </span>
        <span>
          <FaThumbsUp />
        </span>
        <span>
          <FaThumbsDown />
        </span>
      </S.CardControll>
    </S.Card>
  </S.Container>
)

export default MovieCard
