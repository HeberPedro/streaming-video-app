import styled from 'styled-components'

import media from 'styled-media-query'

export const Container = styled.div`
  position: relative;
  height: auto;
  width: 200px;

  img {
    position: relative;
    z-index: 5;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.6s;
  }

  &:hover {
    cursor: pointer;

    > div {
      top: 0;
      left: 10px;
      z-index: 10;
      width: 400px;
      height: 300px;
      transform: scale(1) translateX(90px);
      opacity: 1;
      border-radius: 0 8px 8px 0;
    }

    img {
      border-radius: 8px 0 0 8px;
      transform: scale(1) translateX(-100px);
    }
  }

  ${media.lessThan('medium')`
    width: 150px;

    &:hover {
      img {
        border-radius: 0px;
        transform: scale(1);
      }
    }
  `}
`

export const Card = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;
  opacity: 0;
  margin: 0 auto;
  padding: 0 20px;
  width: 90%;
  height: 270px;
  background: rgba(26, 26, 26, 0.98);
  transition: all ease 0.6s;

  strong {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px;
  }

  p {
    font-size: 18px;
    line-height: 26px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    margin-bottom: 20px;
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const CardControll = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.colors.primary};
    color: #000;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    height: 44px;
    padding: 0 30px;
    border: 0;
    transition: all 0.5s;

    svg {
      margin-right: 3px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.red};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 6px;
    height: 44px;
    width: 44px;
    border-radius: 22px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.body};
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`

export const ButtonLetf = styled.button`
  left: 0;
`

export const ButtonRight = styled.button`
  right: 0;
`
