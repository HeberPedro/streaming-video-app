import { useEffect, useState } from 'react'

import { SectionMovie } from 'src/data/models'
import { data as sectionsMoviesMock } from 'src/mocks/section-movies.json'

import FeaturedMovie from './components/featured-movie'
import NavBar from './components/nav-bar'
import SectionMovies from './components/section-movies'
import * as S from './styles'

const Home = () => {
  const [sectionsMovies, setSectionsMovies] = useState<SectionMovie[]>([])

  useEffect(() => setSectionsMovies(sectionsMoviesMock), [])

  return (
    <S.Container>
      <NavBar />
      <FeaturedMovie />

      <S.SectionMoviesContainer>
        {sectionsMovies.map((sectionMovie) => (
          <SectionMovies key={sectionMovie.id} data={sectionMovie} />
        ))}
      </S.SectionMoviesContainer>
    </S.Container>
  )
}

export default Home
