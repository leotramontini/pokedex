import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 770px) {
    justify-content: space-around;
    align-items: center;
    flex-direction:column;
  }
`

export const PokemonImage = styled.img`
  width: 35rem;
  height: 35rem;

  @media(max-width: 770px) {
    padding-top: 5rem;
    width: 14rem;
    height: 14rem;
  }
`

export const TextContainer = styled.div`
  width: 35rem;
  
  @media(max-width: 770px) {
    width: 14rem;
  }
`

export const PokemonName = styled.h1`
  font: 400 5rem PT Sans;
  text-transform:capitalize;

  @media(max-width: 770px) {
    font: 400 2rem PT Sans;
  }

`

export const StatsContainer = styled.div`
  display:flex;
`

export const Stat = styled.h5`
  font: 400 1rem PT Sans;
  text-transform:capitalize;
`