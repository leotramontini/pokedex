import React from 'react'

import { Container } from './styles'
import Header from '../../components/Header'
import Card from '../../components/Card'

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <Card></Card>
      </Container>
    </>
  )
}

export default Landing