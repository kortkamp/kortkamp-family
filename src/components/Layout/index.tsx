import { ReactNode } from 'react';

import { Container, Main } from './styles';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }:Props) => (
  <Container>
    <Header />
    <Main>
      {children}
      {/* {children} */}
    </Main>
    <Footer />
  </Container>
);
