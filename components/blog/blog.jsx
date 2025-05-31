import BlogHomePageSlider from './blog-home-page-slider';
import BlogCardsSlider from './blog-cards-slider';
import LatestPost from './latest-post';
import BlogCategories from './blog-categories/blog-categories';
import GetPostMetaData from '@/utill/get-post-meta-data';
const blog_arr = GetPostMetaData('blog-posts-files');
const Blog = () => {
  return (
    <div>
      <div className='h-[calc(100vh-15px)] relative
          sm:max-w-[calc(40rem+55px)] 
          md:max-w-[calc(48rem+55px)] 
          lg:max-w-[calc(64rem+55px)] 
          xl:max-w-[calc(80rem+55px)] 
          2xl:max-w-[calc(96rem+55px)]
          sm:max-h-40rem
          md:max-h-48rem
          lg:max-h-64rem
          xl:max-h-80rem
          2xl:max-h-96rem
          mx-auto'>
        <div className="md:rounded-2xl overflow-hidden -top-[80px] md:-top-[72px] left-0 absolute w-full h-full">
          <BlogHomePageSlider img={blog_arr} />
        </div>
      </div>
      <LatestPost blog_arr={blog_arr} />
      <BlogCardsSlider />
      <BlogCategories blog_arr={blog_arr} />
    </div >
  );
}

export default Blog;