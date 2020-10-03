import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"

import api from 'services/api'
import Header from 'components/Header'
import pokeballLoading from 'assets/pokeball-loading.gif'
import { Container, PokemonImage, TextContainer, PokemonName, Stat, StatsContainer, TypeItem, TypeContainer } from './styles'
import { ThemeDefault } from 'theme/themeDefault'

const PokemonPerfil:React.FC = () => {
    let { id } = useParams();

    const [ pokemon, setPokemon ] = useState({
        id: null,
        name: null,
        types: [
            {
                slot: '',
                type: {
                    name: ''
                }
            }
        ],
        stats: [
            {
                base_stat: null,
                stat: {
                    name: null
                }
            }
        ]
    })

    async function getPokemon(id: number){
        const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(response.data)
    }

    const getUrl = () => {
        if (pokemon.id == null) {
            return pokeballLoading
        }

        return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    }

    const getStats = () => {
        return pokemon.stats.map((stat: any) => {
            return (
                <Stat key={ stat.stat.name }>{stat.stat.name}: {stat.base_stat}</Stat>
            )
        })
    }
    
    const getTypes = () => {
        return  pokemon.types.map((type: any) => {
            const typeName = type.type.name
            const color = ThemeDefault.get(typeName)

            return <TypeItem color={ color } key={ type.slot }> { typeName } </TypeItem>
        })
    }
    

    useEffect(() => {
        getPokemon(id)
    }, [ id ])

    return (
        <>
            <Header/>
            <Container>
                <PokemonImage src={getUrl()}/>
                <TextContainer>
                    <PokemonName>
                        { pokemon.name } - # { pokemon.id }
                    </PokemonName>
                    <TypeContainer>
                        { getTypes()}
                    </TypeContainer>
                    <StatsContainer>
                        { getStats() }
                    </StatsContainer>
                </TextContainer>
            </Container>
        </>
    )
}

export default PokemonPerfil