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
  width: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 770px) {
    width: calc(100vw - 5rem);
  }
`

export const PokemonName = styled.h1`
  font: 400 4rem PT Sans;
  text-transform:capitalize;

  @media(max-width: 770px) {
    font: 400 2rem PT Sans;
  }
`

export const StatsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  max-width: 100vw;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const TypeContainer = styled.div`
  display:flex;
  width: 100%;
  flex-direction:row;
  justify-content: space-around;
`

export const TypeItem = styled.div`
  text-align:center;
  font: 400 1.5rem PT Sans;
  text-transform:capitalize;

  width: 6rem;
  border-radius: 10%;
  background-color: ${props => props.color || '#EFF1F0'};
`

export const Stat = styled.h5`
  flex-wrap: wrap;
  min-width: 20rem;
  font: 400 1.3rem PT Sans;
  text-transform:capitalize;

`