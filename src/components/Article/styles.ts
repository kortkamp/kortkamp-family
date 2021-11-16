import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  word-spacing: 1px;
  line-height: 1.4rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const CoverImg = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  p {
    text-indent: 50px;
    
    /* letter-spacing: 2px; */
  }

  a {
    text-decoration: none;
    color: #008CBA;
  }

`;
