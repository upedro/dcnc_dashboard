import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    padding: .2rem .2rem .2rem .2rem;
    overflow-x: none;

    @media (min-width: 500px)
    {
      padding: .1rem .1rem .1rem .1rem;
      min-width: 1400px;
      max-width: 100%;
    }
    
`
