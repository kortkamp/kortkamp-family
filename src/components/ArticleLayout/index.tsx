import { ReactNode } from 'react';

import {
  Container, Main, Title, ContentWraper,
} from './styles';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { AsideList } from '../AsideList';
import { IPostData } from '../../api';

interface Props {
  children: ReactNode;
  posts: {
    data:IPostData;
    content : string;
  }[]
}

export const ArticleLayout = ({ children, posts }:Props) => (
  <Container>
    <Header />
    <Main>
      <ContentWraper>
        {children}
        <AsideList posts={posts} />
      </ContentWraper>
    </Main>
    <Footer />
  </Container>
);
