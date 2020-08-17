import styled from 'styled-components'

export const Container = styled.div`
    width: 18rem;
    height: 18rem;
    border-radius: 10%;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

    @media(max-width: 770px) {
        width: 16rem;
        height: 16rem;
    }
    
    /* background-color: #D7D9D8; */
    background-color: ${props => props.color || '#D7D9D8'};
`
export const TextName = styled.h1`
    padding-top: 1.0rem;
    font: 700 1.4rem PT Sans;
`

export const PokemonImage = styled.img`
    width: 10rem;
    min-width: 10rem;
    height: 12rem;

    @media(max-width: 770px) {
        width: 9rem;
        height: 11rem;
    }
`

export const DescriptionContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width: 100%;
    
`

export const TypesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TypeItem = styled.h1`
    text-align:center;
    font: 400 1.2rem PT Sans;

    width: 4.7rem;

    border-radius:10%;
    background-color: #EFF1F0;
    
`