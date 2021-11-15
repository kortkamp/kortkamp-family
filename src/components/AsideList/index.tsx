/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
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
      <Link href={`/posts/${encodeURIComponent(post.data.url)}`}>
        <a>
          <AsideItem key={post.data.title} data={post.data} />
        </a>
      </Link>
    ))}
  </Container>
);
