import { Header } from '../components/Header';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

import { Container } from '../styles/pages/Contact';

const Contact = () => (
  <Container>
    <Header />
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <ContactForm />
    </main>
    <Footer />
  </Container>
);

export default Contact;
