import React, { useState, useEffect } from 'react'
import api from 'services/api'
import pokeballLoading from 'assets/pokeball-loading.gif'
import { Container, PokemonImage, DescriptionContainer, TypesContainer, TypeItem, TextName } from './styles'

interface CardProps {
    url: string;
}

const Card: React.FC<CardProps> = ({ url }) => {

    const [ pokemon, setPokemon ] = useState({
        id: null,
        name: null,
        types: [
            {
                slot: null,
                type: {
                    name: null
                }
            }
        ]
    })

    async function getPokemon(url: string){
        const response = await api.get(url)
        setPokemon(response.data)
    }

    const getType = (type: any) => {
        return (
            <TypeItem key={ type.slot }> { type.type.name } </TypeItem>
        )
    }

    const getUrl = () => {
        if (pokemon.id == null) {
            return pokeballLoading
        }

        return `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    }

    useEffect(() => {
        getPokemon(url)
    }, [])

    return (
        <>
        <Container>
            <TextName>{pokemon.name} -  #{pokemon.id}</TextName>
            <DescriptionContainer>
                <TypesContainer>
                    { pokemon.types.map((type: any) => {
                        return  getType(type)
                    })}
                </TypesContainer>
                <PokemonImage src={getUrl()}/>
            </DescriptionContainer>
        </Container>
        </>
    )
}

export default Card