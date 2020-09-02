import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"

import api from 'services/api'
import Header from 'components/Header'
import pokeballLoading from 'assets/pokeball-loading.gif'
import { Container, PokemonImage, TextContainer, PokemonName, Stat } from './styles'


const PokemonPerfil:React.FC = () => {
    let { id } = useParams();

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
                <Stat>{stat.stat.name}: {stat.base_stat}</Stat>
            )
        })
    }

    useEffect(() => {
        getPokemon(id)
    }, [ id ])

    return (
        <>
            <Header/>
            <Container>
                <TextContainer>
                    <PokemonName>
                        {pokemon.name} - # {pokemon.id}
                    </PokemonName>
                    {getStats()}
                </TextContainer>
                <PokemonImage src={getUrl()}/>
            </Container>
        </>
    )
}

export default PokemonPerfil