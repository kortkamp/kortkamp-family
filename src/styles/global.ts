import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
    @media (max-width: 720px){
      font-size: 110%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary_light};
    
    font: ${({ theme }) => theme.font};


    max-width: 100vw;
    
    min-height: 100vh;
  }
`;
