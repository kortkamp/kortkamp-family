import styled from 'styled-components';

export const Container = styled.div`


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

export const ContentWraper = styled.div`
  display: flex;
  gap: 100px;

  & > article {
    flex:2;
  }
  & > aside {
    flex: 1;
  }

  @media (max-width: 720px){
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
 
`;
