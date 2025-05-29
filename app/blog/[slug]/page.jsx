import SuggestedPosts from "@/components/blog/slug/suggested-posts";
import PostHero from "@/components/blog/slug/post-hero";
import Artical from "@/components/blog/slug/artical";
import GetPostContent from "@/utill/get-post-content";
import { uuidv7 } from "uuidv7";


export default async function BlogPostPage(props) {
  const postData = GetPostContent(props.params.slug);
  return (
    <div>
      <PostHero data={postData.data} />
      <div className='container p-2 mx-auto'>
        <div className="grid grid-cols-12 gap-5 pb-10 mx-auto">
          <div className="col-span-1 hidden lg:block"></div>

          <div className="col-span-12 lg:col-span-6 mx-auto bg-green-300 w-fit py-10 px-5 rounded-lg shadow-lg">
            <Artical content={postData.content} />
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
