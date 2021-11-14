import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100vh;

`;

export const Main = styled.main`
    max-width: ${({ theme }) => theme.maxWidth};

    margin: 0 auto;
    padding: 80px 20px;

    flex-grow: 1;
`;
