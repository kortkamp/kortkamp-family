// import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { ReactNode } from 'react';
import { IPostData } from '../../api';
import { SectionTitle } from '../SectionTitle';
import {
  Container,
  CoverImg,
  Content,
} from './styles';

interface Props {
  children: ReactNode;
  postData: IPostData;
}

export const Article = ({ children, postData }:Props) => (
  <Container>
    <SectionTitle>
      {postData.title}
    </SectionTitle>
    <CoverImg src={postData.coverImage} />
    <Content>
      {children}
    </Content>
  </Container>
);
