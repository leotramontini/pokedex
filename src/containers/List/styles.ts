import styled from 'styled-components'

export const Container = styled.div`
    max-width: calc(100vw - 30px);
    
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    
    @media(max-width: 700px) {
        padding: 10px 0;
        justify-content:center;
    }
`