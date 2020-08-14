import styled from 'styled-components'

export const TextLogo = styled.div`
  font: 700 10rem PT Sans;

  @media(max-width: 700px) {
    font: 700 3.5rem PT Sans;
  }
`
export const Container = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`

export const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 1.5rem;

  @media(max-width: 700px) {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
`