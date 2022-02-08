import styled from 'styled-components'

export const Container = styled.div`
    background: #f0f0f0;
    color:white;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    padding: 1rem 5rem 2rem 5rem;
    flex: 1;
    @media (max-width: 500px)
    {
      padding: .1rem .1rem .1rem .1rem;
      
    }
    
`

export const CardWrapper = styled.div`

    display: flex;
    justify-content: start;  
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1400px;
    gap:1rem;
    @media (max-width: 500px)
    {
      padding: .1rem .1rem .1rem .1rem;
    }
    
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;  
    gap: 2rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 500px)
    {
      
    }
`