import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 50px; 

  margin-top: 20px;

  display:flex;
  align-items:center;
  justify-content:center;

  background-color: ${(props) => props.theme.colors.footer};
  color: ${(props) => props.theme.colors.text};

  justify-self: flex-end;

`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};

  display:flex;
  align-items:center;
  justify-content:flex-end;
`;
