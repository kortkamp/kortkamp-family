import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  gap: 10px;
`;

export const Tag = styled.div`
  flex: 1;

  & > span {
    width: 70px;
    height: 70px;
    padding: 10px;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    border-radius: 50%;
  
    background-color: ${({ theme }) => theme.colors.primary_light};
    color: ${({ theme }) => theme.colors.shape};
    font-weight: bold;
  }
`;
export const Content = styled.div`
  flex: 3;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: bold;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0;
`;
