import Head from "next/head";
import Link from "next/link";
import { getPosts } from '../lib/posts';

function HomePage({ posts }) {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" value="This is the home page" />
			</Head>
			<main>
				<h1>My Blog</h1>
				<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={`/posts/${post.slug}`}>
							<a>{post.title}</a>
						</Link>
					</li>
					))}
				</ul>
			</main>
		</>
	);
}

export default HomePage;


export async function getStaticProps(context) {
	const posts = await getPosts();
console.log(posts);
	return {
		props: { posts },
	};
}
