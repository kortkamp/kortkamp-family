import { AsideItem } from '../AsideItem';
import { Container, Title } from './styles';

import { IPostData } from '../../api';

interface Props {
  posts: {
    data:IPostData;
    content : string;
  }[]
}

export const AsideList = ({ posts }:Props) => (
  <Container>
    <Title>LOREM</Title>
    {posts.map((post) => (
      <AsideItem key={post.data.title} data={post.data} />
    ))}
  </Container>
);
