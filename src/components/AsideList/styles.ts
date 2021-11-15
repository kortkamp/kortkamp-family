import styled from 'styled-components';

export const Container = styled.aside`
  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;
  
  font-weight: bolder;
  font-size: 1.8rem;
  
  @media (max-width: 720px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;
