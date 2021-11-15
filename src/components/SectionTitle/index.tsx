import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export const SectionTitle = ({ children }:Props) => (
  <Container>
    {children}
  </Container>
);
