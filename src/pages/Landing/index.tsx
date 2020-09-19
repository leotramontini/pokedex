import React from 'react'

import { Container } from './styles'
import Header from 'components/Header'
import List from 'containers/List'

const Landing: React.FC = () => {
  return (
    <Container>
      <Header/>
      <List/>
    </Container>
  )
}

export default Landing