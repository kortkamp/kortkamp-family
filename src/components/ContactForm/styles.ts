import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  
  height: 500px;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 0px;
  margin: 20px;

  border-radius: 5px;
  overflow: hidden;
`;

export const Aside = styled.aside`
  flex: 1;
  overflow: hidden;
  background-image: url('/hanover.jpg');
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  img {
    width: 500px;
    height: 500px;
    /* min-height: 100%; */
    object-fit: cover;
    
  }
  @media (max-width: 720px){
    display: none;
  }
`;

export const InputWraper = styled.div`


  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.shape};

  & > * {
    height: 40px;
    padding: 10px;

    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    margin-bottom: 5px;
  }
  span {
    border: none;
    align-self: center;
    font-size: 1.3rem;
  }

  textarea {
    height: auto;
  }

  input[type='submit']{
    width: 30%;
    
    align-self: flex-end;
    cursor: pointer;

    background-image: linear-gradient(
      ${(props) => props.theme.colors.primary_light},
      ${(props) => props.theme.colors.primary}
    );

    color: ${({ theme }) => theme.colors.secondary};

    font-weight: bold;
    transition: all 0.1s;
    opacity: 0.9;

    &:hover{
      opacity: 1;
    }

    &:active{
      opacity: 0.8;
    }
  }

`;
