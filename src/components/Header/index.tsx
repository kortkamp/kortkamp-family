/* eslint-disable import/prefer-default-export */
import Image from 'next/image';

import { NavBar } from '../NavBar';
import {
  Container, Title, SiteName, Description, Background, Banner,
} from './styles';

import BackgroundImg from '../../../public/hanover.png';

export const Header = () => (
  <Container>
    <Banner>
      <Title>
        <SiteName href="/">Lorem, ipsum.</SiteName>
        <Description>From Germany to Brazil</Description>
      </Title>
      <Background>
        <Image src={BackgroundImg} alt="" />
      </Background>
    </Banner>
    <NavBar />
  </Container>
);
