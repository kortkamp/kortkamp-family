/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AsideItem } from '../AsideItem';
import { Container } from './styles';

import { IPostData } from '../../api';
import { SectionTitle } from '../SectionTitle';

interface Props {
  posts: {
    data:IPostData;
    content : string;
  }[]
}

export const AsideList = ({ posts }:Props) => (
  <Container>
    <SectionTitle>Articles</SectionTitle>
    {posts.map((post) => (
      <Link key={post.data.url} href={`/posts/${encodeURIComponent(post.data.url)}`}>
        <a>
          <AsideItem data={post.data} />
        </a>
      </Link>
    ))}
  </Container>
);
