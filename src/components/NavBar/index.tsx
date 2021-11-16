/* eslint-disable import/prefer-default-export */
import {
  Container,
  List,
} from './styles';

export const NavBar = () => (
  <Container>
    <List>
      <li>
        <a href="/">
          <span className="after">home</span>
          <span className="before">home</span>
        </a>
      </li>

      <li>
        <a href="/">
          <span className="after">história</span>
          <span className="before">história</span>
        </a>
      </li>

      <li>
        <a href="/">
          <span className="after">lorem</span>
          <span className="before">lorem</span>
        </a>
      </li>

      <li>
        <a href="/contact">
          <span className="after">CONTATO</span>
          <span className="before">CONTATO</span>
        </a>
      </li>
    </List>
  </Container>
);
