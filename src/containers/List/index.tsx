import React, { useState, useEffect }from 'react'
import api from '../../services/api'


import Card from '../../components/Card'
import { Container } from './styles'

interface Pokemon {
    name: string;
    url: string;
}

const List: React.FC = () => {

    const [ pokemons, setPokemons ] = useState([])
    
    async function getPokemon() {
        const response = await api.get('https://pokeapi.co/api/v2/pokemon?limit=18')
        setPokemons(response.data.results)
    }

    useEffect(() => {
        getPokemon()
    })

    return (
        <Container>
            { pokemons.map((pokemnon: Pokemon) => {
                return (
                    <Card key={pokemnon.name} url={pokemnon.url}/>
                )
            })}
        </Container>
    )
}

export default List