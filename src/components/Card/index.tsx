import React from 'react'
import Vibrant from 'node-vibrant'

import { Container, PokemonImage, DescriptionContainer, TypesContainer, TypeItem, TextName } from './styles'

const Card: React.FC = () => {
    return (
        <>
        <Container>
            <TextName>Bulbasaur</TextName>
            <DescriptionContainer>
                <TypesContainer>
                    <TypeItem>Grass</TypeItem>
                    <TypeItem>Poison</TypeItem>
                </TypesContainer>
                <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
            </DescriptionContainer>
        </Container>
        </>
    )
}

export default Card