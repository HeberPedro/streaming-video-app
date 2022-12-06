import * as S from './styles'

export interface LoaderProps {
  size?: number
}

const Loader = ({ size = 12 }: LoaderProps) => (
  <S.Overlay>
    <S.Spinner size={size} />
  </S.Overlay>
)

export default Loader
