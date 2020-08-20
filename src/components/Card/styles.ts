import styled from 'styled-components'

export const Container = styled.div`
    width: 14rem;
    height: 14rem;
    margin: 1.0rem;
    border-radius: 10%;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    
    @media(max-width: 770px) {
        width: 16rem;
        height: 16rem;
        margin: 1.0rem 0;
    }
    
    /* background-color: #D7D9D8; */
    background-color: ${props => props.color || '#D7D9D8'};
`
export const TextName = styled.h1`
    padding-top: 1.0rem;
    font: 700 1.4rem PT Sans;
    text-transform:capitalize;
`

type PokemonImageProps = {
    frontUrl?: string
    backUrl?: string
}

export const PokemonImage = styled.div<PokemonImageProps>`
    width: 9rem;
    height: 9rem;

    background-size: cover;
    background-position: center;
    background-image: url( ${ props => props.frontUrl} );

    &:hover {
    background-image: url( ${ props => props.backUrl} );
    }

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
    font: 400 0.9rem PT Sans;
    text-transform:capitalize;

    width: 3rem;
    border-radius:10%;
    background-color: #EFF1F0;
`