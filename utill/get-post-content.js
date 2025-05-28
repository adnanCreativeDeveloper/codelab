import fs from 'fs';
import matter from 'gray-matter';
const GetPostContent = (slug) => {

  const filePath = `blog-posts-files/${slug}.md`;
  const content = fs.readFileSync(filePath, 'utf-8');
  const matterResult = matter(content);
  return matterResult
}

export default GetPostContent;
