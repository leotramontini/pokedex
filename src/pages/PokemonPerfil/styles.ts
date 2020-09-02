import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
`

export const PokemonImage = styled.img`
  width: 35rem;
  height: 35rem;
`

export const TextContainer = styled.div`
  width: 35rem;
`

export const PokemonName = styled.h1`
  font: 400 5rem PT Sans;
  text-transform:capitalize;
`

export const StatsContainer = styled.div`
  display:flex;
`

export const Stat = styled.h5`
  font: 400 1rem PT Sans;
  text-transform:capitalize;
`