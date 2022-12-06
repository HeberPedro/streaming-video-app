import { useEffect, useState } from 'react'
import { FaSearch, FaBell, FaGift, FaCaretDown } from 'react-icons/fa'

import logo from 'src/presentation/assets/images/logo.png'
import profile from 'src/presentation/assets/images/profile.png'

import * as S from './styles'

const NavBar = () => {
  const [isBlack, setIsBlack] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => setIsBlack(window.scrollY > 10))

    return () => {
      window.removeEventListener('scroll', () =>
        setIsBlack(window.scrollY > 10)
      )
    }
  }, [])

  return (
    <S.Container isBlack={isBlack}>
      <S.Menu>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <strong>Inicio</strong>
          </li>
          <li>Series</li>
          <li>Filmes</li>
          <li>Mais Recentes</li>
          <li>Minha Lista</li>
        </ul>
      </S.Menu>

      <S.Profile>
        <FaSearch />
        <FaGift />
        <FaBell />
        <button type="button">
          <img src={profile} alt="Profile" />
          <FaCaretDown />
        </button>
      </S.Profile>
    </S.Container>
  )
}

export default NavBar
