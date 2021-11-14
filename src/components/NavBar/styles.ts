import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  

  display:flex;
  align-items:center;
  justify-content:center;

  background-image: linear-gradient(
    ${(props) => props.theme.colors.primary_light},
    ${(props) => props.theme.colors.primary}
  );

  box-shadow: 0px 4px 9px ${(props) => props.theme.colors.primary_light};
`;

export const List = styled.ul`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 20px;

  
  li {
    flex-grow:1;
    
    overflow: hidden;
   
    list-style-type: none;   
  }
  a {
    position: relative;
    flex-grow:1;
    display: flex;
    justify-content:flex-end;
    align-items:flex-end;
    text-decoration: none;


    &:hover {
      span.after {
        transform: scaleY(-1);
      }
      span.before {
        transform: scaleY(1);
      }
    } 
  }
  span {
    flex-grow:1;
    padding: 20px;
    margin: 0 auto;
    
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;

    transition: transform 0.3s ease-out;

  }
  span.after {
    border: 1px solid ${(props) => props.theme.colors.secondary_light};
    
    color: ${(props) => props.theme.colors.secondary};
    transform-origin:top;
  }
  span.before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  
    transform: scaleY(0);
    transform-origin:bottom;
    
    color: ${(props) => props.theme.colors.primary};

    background-image: linear-gradient(
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.secondary_light}
    );
  }
  
`;
