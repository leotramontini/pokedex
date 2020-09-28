import React, { useState, useEffect } from 'react'
import api from 'services/api'
import pokeballLoading from 'assets/pokeball-loading.gif'
import { Container, PokemonImage, DescriptionContainer, TypesContainer, TypeItem, TextName } from './styles'
import { ThemeDefault } from 'theme/themeDefault'

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
                    name: ''
                }
            }
        ]
    })

    async function getPokemon(url: string){
        const response = await api.get(url)
        setPokemon(response.data)
    }

    const getTypes = () => {
        return  pokemon.types.map((type: any) => {
            const typeName = type.type.name
            const color = ThemeDefault.get(typeName)
            return <TypeItem color={ color } key={ type.slot }> { typeName } </TypeItem>
        })
    }

    const getBackgroundColor = () => {
        const typeName = pokemon.types[0].type.name
        return ThemeDefault.get(typeName)
    }

    const getUrl = () => {
        if (pokemon.id == null) {
            return pokeballLoading
        }

        return `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    }

    useEffect(() => {
        getPokemon(url)
    }, [url])

    return (
        <>
        <Container color={ getBackgroundColor() } href={`${pokemon.id}`}>
            <TextName>{pokemon.name} -  #{pokemon.id}</TextName>
            <DescriptionContainer>
                <TypesContainer>
                    { getTypes() }
                </TypesContainer>
                <PokemonImage src={getUrl()}/>
            </DescriptionContainer>
        </Container>
        </>
    )
}

export default Card