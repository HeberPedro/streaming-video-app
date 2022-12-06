import { useEffect, useRef } from 'react'

import 'video.js/dist/video-js.css'
import videojs from 'video.js'

import * as S from './styles'

type VideoSource = {
  src: string
  type: string
}

interface VideoJSProps {
  options: videojs.PlayerOptions
  source: VideoSource
}

const INITIAL_OPTIONS: videojs.PlayerOptions = {
  controls: true,
  responsive: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
}

const VideoJS = ({ options, source }: VideoJSProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<videojs.Player>()

  const handleNewSource = (source: VideoSource) => {
    if (
      playerRef.current &&
      playerRef.current.currentSource().src !== source.src
    ) {
      const currentTime = playerRef.current.currentTime()
      playerRef.current.src(source)
      playerRef.current.currentTime(currentTime)
    }
  }

  useEffect(() => {
    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current as Element, {
        ...INITIAL_OPTIONS,
        ...options,
        sources: [source],
      })
    } else {
      handleNewSource(source)
    }
  }, [options, source])

  return (
    <S.Container>
      <video className="video-js vjs-default-skin" ref={videoRef} />
    </S.Container>
  )
}

export default VideoJS
