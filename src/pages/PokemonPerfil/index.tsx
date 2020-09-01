import React from 'react'
import { useParams } from "react-router"

import { Container } from './styles'

const PokemonPerfil:React.FC = () => {
    let { id } = useParams();
    return (
        <Container>
            {id}
        </Container>
    )
}

export default PokemonPerfil