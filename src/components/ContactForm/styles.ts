import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  
  height: 600px;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 0px;
  margin: 20px;

  border-radius: 5px;
  overflow: hidden;

  box-shadow: 0 0 6px grey;

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
  justify-content: space-evenly;
  align-items: stretch;
  

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.shape};


  h5{
    text-align: center;
    font-size: 1.5rem;
  }

  input, textarea, button {
    border-radius: 5px;
    padding: 10px;
    margin-top: 5px;

    font-size: 1rem;

    border: 1px solid ${({ theme }) => theme.colors.text}
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
      height: 20px;
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
