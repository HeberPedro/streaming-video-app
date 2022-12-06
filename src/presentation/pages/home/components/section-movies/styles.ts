import styled from 'styled-components'

import media from 'styled-media-query'

interface ContentMoviesProps {
  marginLeft: number
  width: number
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 0;

  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    z-index: 7;
  }

  > button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    z-index: 6;
    background: rgba(20, 20, 20, 0.8);
    border: 0;

    svg {
      width: 40px;
      height: 40px;
      color: ${({ theme }) => theme.colors.primary};
    }

    visibility: hidden;

    &:hover {
      svg {
        width: 45px;
        height: 45px;
      }
    }
  }

  &:hover {
    button {
      visibility: visible;
    }
  }

  ${media.lessThan('medium')`
    padding: 10px 20px 0;

    h1 {
      font-size: 28px;
    }
    > button {
      svg {
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  `}
`

export const ContentMovies = styled.div<ContentMoviesProps>`
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  width: ${({ width }) => `${width}px`};

  display: flex;
  flex-direction: row;
  align-items: stretch;

  transition: margin-left 1s;
`

export const ButtonLetf = styled.button`
  left: 0;
`

export const ButtonRight = styled.button`
  right: 0;
`
