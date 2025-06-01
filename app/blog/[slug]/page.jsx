import SuggestedPosts from "@/components/blog/slug/suggested-posts/suggested-posts";
import PostHero from "@/components/blog/slug/post-hero";
import Article from "@/components/blog/slug/article";
import { uuidv7 } from "uuidv7";
import fs from 'fs';
import matter from 'gray-matter';
import GetPostMetaData from "@/utill/get-post-meta-data";
import { notFound } from "next/navigation";

const GetPostContent = (slug) => {
  try {
    const filePath = `blog-posts-files/${slug}.md`;
    const content = fs.readFileSync(filePath, "utf-8");
    const matterResult = matter(content);
    return matterResult;
  } catch (err) {
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = GetPostMetaData("blog-posts-files");
  return posts.map((item) => ({ slug: item.slug }));
};

function capitalize(text) {
  return text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export async function generateMetadata({ params }) {
  const slug = await params;
  return {
    title: `Codelab | ${capitalize(slug.slug.replace(/-/g, " "))}`,
    description: `Read more about ${slug.slug} on the Codelab blog.`,
  };
}

export default async function BlogPostPage(props) {
  const slug = await props.params;
  const postData = GetPostContent(slug.slug);
  if (!postData) return notFound();

  const { data, content } = postData;
  return (
    <div>
      <PostHero data={data} />
      <div className='container p-2 mx-auto'>
        <div className="grid grid-cols-12 gap-5 pb-10 mx-auto">
          <div className="col-span-1 hidden lg:block"></div>

          <div className="col-span-12 lg:col-span-6 mx-auto bg-green-300 w-fit py-10 px-5 rounded-lg shadow-lg">
            <Article content={content} />
          </div>
          <div className='col-span-12 lg:col-span-4 max-sm:mt-5'>
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                Latest posts
              </h1>
            </div>
            <SuggestedPosts />
            <div className="mt-5">
              <div>
                <h1 className="text-xl md:text-2xl font-bold mb-3">
                  Tags
                </h1>
              </div>
              <div className="flex flex-wrap items-start justify-items-start gap-3 mt-7 w-full">
                {postData.data.key_words.map((item) => (<div key={uuidv7()} className="bg-orange-50 shadow rounded-lg py-1.5 px-3.5 font-semibold w-fit text-sm text-orange-400">{item}</div>))}
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
