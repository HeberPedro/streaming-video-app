import { MovieResolutions } from 'src/domain/models'
import { S3_ENDPOINT_URL, S3_BUCKET_VIDEOS } from 'src/main/constants'

export default [
  {
    id: 'joker',
    name: 'Coringa',
    urls: {
      [MovieResolutions.RESOLUTION_360]: `${S3_ENDPOINT_URL}${S3_BUCKET_VIDEOS}joker/resolutions/360/360p.m3u8`,
      [MovieResolutions.RESOLUTION_480]: `${S3_ENDPOINT_URL}${S3_BUCKET_VIDEOS}joker/resolutions/480/480p.m3u8`,
      [MovieResolutions.RESOLUTION_720]: `${S3_ENDPOINT_URL}${S3_BUCKET_VIDEOS}joker/resolutions/720/720p.m3u8`,
      [MovieResolutions.RESOLUTION_1080]: `${S3_ENDPOINT_URL}${S3_BUCKET_VIDEOS}joker/resolutions/1080/1080p.m3u8`,
    },
    imageUrl:
      'https://www.themoviedb.org/t/p/original/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg',
    rating: '98',
    releaseDate: '2019',
    overview:
      'Um comediante falido enlouquece e se torna um assassino psicopata.',
    genres: 'Suspense, Suspense psicológico, Crime, Drama',
  },
]
