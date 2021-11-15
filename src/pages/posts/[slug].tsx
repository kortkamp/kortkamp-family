import { getPostBySlug, getAllPosts, IPostData } from '../../api';
import { Layout } from '../../components/Layout';

interface PageProps {
  post: {
    data:IPostData;
    content : string;
  }
}

type getStaticParams = {
  params: {
    slug: string
  }
}

const PostPage = ({ post }:PageProps) => (
  <Layout>
    <article>
      {post.content}
    </article>
  </Layout>
);

export async function getStaticProps(props: getStaticParams) {
  const post = getPostBySlug(props.params.slug);

  return {
    props: { post },
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
