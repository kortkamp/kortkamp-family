import { FormEvent } from 'react';
import { Aside, Container, InputWraper } from './styles';

// import asideImg from '../../../public/hanover.jpg';

const handleSubmit = (e:FormEvent) => {
  e.preventDefault();
  console.log('submit');
};

export const ContactForm = () => (
  <Container onSubmit={handleSubmit}>
    <Aside />
    <InputWraper>
      <span>Contato</span>
      <input type="text" placeholder="Nome" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="" id="" rows={10} placeholder="Mensagem" />
      <input type="submit" value="Enviar" />
    </InputWraper>
  </Container>
);
