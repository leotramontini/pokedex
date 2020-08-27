import React, { useState, useEffect }from 'react'
import api from 'services/api'


import Card from 'components/Card'
import { Container } from './styles'

interface Pokemon {
    name: string;
    url: string;
}

const List: React.FC = () => {

    const [ pokemons, setPokemons ] = useState([])
    
    async function getPokemon() {
        const response = await api.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(response.data.results)
    }

    useEffect( () => {
        getPokemon()
    }, [])

    return (
        <Container>
            { pokemons.map((pokemon: Pokemon) => {
                return (
                    <Card key={pokemon.name} url={pokemon.url}/>
                )
            })}
        </Container>
    )
}

export default List