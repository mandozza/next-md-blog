import { readdir, readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

// Read the posts directory and return an array of file paths names without .md.
export async function getPost(slug) {
	const source = await readFile(`content/posts/${slug}.md`, 'utf8');
	const { content, data: { date, title } } = matter(source);
  const description = marked(content);

  return { title, date, description };
}

// Returns an array of all the posts with slugs.
export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}

// This function will return an array of slugs.
export async function getSlugs () {
  const files = await readdir('content/posts');
  return files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''));
}

