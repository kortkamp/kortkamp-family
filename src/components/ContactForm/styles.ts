import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  
  height: 600px;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 20px; 

  border-radius: 5px;
  overflow: hidden;

  /* box-shadow: 0 0 6px grey; */

  h5{
    /* text-align: center; */
    font-size: 1.5rem;
    padding-bottom: 20px;
  }

`;

export const SubmitResponse = styled.div`
  flex: 1;
  display: flex ;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  a {
    width: 80px;
    padding: 5px;
    margin-top:20px;

    

    background-image: linear-gradient(
      ${(props) => props.theme.colors.primary_light},
      ${(props) => props.theme.colors.primary}
    );

    color: ${({ theme }) => theme.colors.secondary};

    text-align: center;
    text-decoration: none;
    cursor: pointer;
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

export const Aside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  
  padding: 20px;
  

  @media (max-width: 720px){
    display: none;
  }
`;

export const InputWraper = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.shape};
  background-color: transparent;

  input, textarea, button {
    border-radius: 5px;
    padding: 10px;

    font-size: 1rem;

    border: 2px solid #dadada;
    background-color:  ${({ theme }) => theme.colors.background_dark};

  }

  button[type='submit']{
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

  div.form-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    
    .invalid-feedback {
      color:red;
      height: 15px;
      font-size:0.8rem;
      padding-left: 10px;
      padding-top: 2px;
    }
    .is-invalid {
      border: 1px solid red;
      &:focus{
        border: 1px solid red;
        outline: none;
        box-shadow: 0 0 3px red;
      }
    }
  }

`;
