export type Movie = {
  id: string
  name: string
  urls: MovieUrls
  imageUrl: string
  rating: string
  releaseDate: string
  overview: string
  genres: string
}

export enum MovieResolutions {
  RESOLUTION_360 = '360p',
  RESOLUTION_480 = '480p',
  RESOLUTION_720 = '720p',
  RESOLUTION_1080 = '1080p',
}

export type MovieUrls = Record<MovieResolutions, string>
