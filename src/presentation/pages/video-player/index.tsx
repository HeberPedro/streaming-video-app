import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { SpeedTest } from 'src/data/usecases'
import { Movie, MovieResolutions } from 'src/domain/models'
import featuredMovies from 'src/mocks/featured-movie'
import { VideoJS, Loader } from 'src/presentation/components'

const SPEED_TEST_INTERVAL_MS = 10000
const speedTest = new SpeedTest()

const VideoPlayer = () => {
  const { id } = useParams<{ id: string }>()

  const [movie, setMovie] = useState<Movie | null>()
  const [currentResolution, setCurrentResolution] = useState(
    MovieResolutions.RESOLUTION_360
  )

  useEffect(() => {
    const [selectedMovie] = featuredMovies.filter((movie) => movie.id === id)
    setMovie(selectedMovie)
  }, [])

  useEffect(() => {
    if (!movie) {
      return
    }

    const speedTestInterval = speedTest.execute(
      SPEED_TEST_INTERVAL_MS,
      movie?.urls[currentResolution],
      handleNewSpeed
    )

    return () => clearInterval(speedTestInterval)
  }, [currentResolution])

  const handleNewSpeed = (speed: number) => {
    // 4Mb/s
    if (speed >= 4) {
      setCurrentResolution(MovieResolutions.RESOLUTION_1080)
    }
    // 2.5Mb/s
    else if (speed >= 2.5) {
      setCurrentResolution(MovieResolutions.RESOLUTION_720)
    }
    // 1.1Mb/s
    else if (speed >= 1.1) {
      setCurrentResolution(MovieResolutions.RESOLUTION_480)
    }
    // < 1.1Mb/s
    else {
      setCurrentResolution(MovieResolutions.RESOLUTION_360)
    }
  }

  if (!movie) {
    return <Loader />
  }

  return (
    <VideoJS
      options={{
        autoplay: true,
      }}
      source={{
        src: movie.urls[currentResolution],
        type: 'application/x-mpegURL',
      }}
    />
  )
}

export default VideoPlayer
