import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  /* height: 150px;  */
  display:flex;
  flex-direction: column;
  align-items:center;

  background-color: ${(props) => props.theme.colors.header};
  
  color: ${(props) => props.theme.colors.text};

`;

export const Banner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 200px;

  padding: 0 20px;

  display: flex;
  align-items: stretch;
  justify-content: stretch;
  

  overflow: hidden;

`;

export const Background = styled.div`
  max-height: 100%;
  /* height: 1000px; */
  min-width: 1000px;
  /* width: 1000px; */
  opacity: 0.2;

  display: flex;
  align-items: center;

  @media (max-width: 720px){
    transform: translateX(-500px)
  }
`;

export const Title = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 50px 0;
  @media (max-width: 720px){
    padding: 50px 10px;
  }
  
`;

export const SiteName = styled.a`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.text};
  white-space: nowrap;
  text-decoration: none;

`;
export const Description = styled.div`
  color: ${(props) => props.theme.colors.text};
  padding: 0px 0;
  white-space: nowrap
`;
