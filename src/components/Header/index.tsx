import React from 'react'

import { TextLogo, Logo, Container } from './sytles'
import pokeballLogo from 'assets/pokeball-logo.png'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={pokeballLogo}/>
      <TextLogo>Pokedex</TextLogo>
    </Container>
  )
}

export default Header