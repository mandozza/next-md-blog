import Head from 'next/head'
import { getSlugs, getPost } from '../../lib/posts';

export default function PostPage({post}) {
const { title, description, date } = post;
	return (
		<>
    <Head>
      <title>{title}</title>
    </Head>
			<h1>{title}</h1>
      <span>{date}</span>
			<article dangerouslySetInnerHTML={{ __html: description}}/>
		</>
	);
}

// defining all the possible routes
export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

// Here we are destucturing the context object and getting the slug from it.
export async function getStaticProps({ params: {slug} }) {
  const post = await getPost(slug);

  return {
    props: { post},
  }
}
