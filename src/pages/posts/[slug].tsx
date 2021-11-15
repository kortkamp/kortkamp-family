import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getPostBySlug, getAllPosts, IPostData } from '../../api';
import { Article } from '../../components/Article';
import { ArticleLayout } from '../../components/ArticleLayout';

interface IPost {

    data:IPostData;
    content : string;

}
interface PageProps {
  mdxSource: MDXRemoteSerializeResult;
  postData : IPostData;
  postList: IPost[];
}

type getStaticParams = {
  params: {
    slug: string
  }
}

const PostPage = ({ mdxSource, postData, postList }:PageProps) => (
  <ArticleLayout posts={postList}>
    <Article postData={postData}>

      <MDXRemote {...mdxSource} />
    </Article>
  </ArticleLayout>
);

export async function getStaticProps(props: getStaticParams) {
  const post = getPostBySlug(props.params.slug);

  const postList = getAllPosts();

  const mdxSource = await serialize(post.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    // scope: post.data,
  });

  return {
    props: {
      mdxSource,
      postData: post.data,
      postList,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.data.url },
    })),
    fallback: false,
  };
}

export default PostPage;
