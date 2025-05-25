import BlogHomePageSlider from './blog-home-page-slider';
import BlogCardsSlider from './blog-cards-slider';



const Blog = () => {

  return (
    <div>
      <div className='h-[calc(100vh-15px)] relative
            sm:max-w-[calc(40rem+55px)] 
            md:max-w-[calc(48rem+55px)] 
            lg:max-w-[calc(64rem+55px)] 
            xl:max-w-[calc(80rem+55px)] 
            2xl:max-w-[calc(96rem+55px)]
            sm:max-h-[calc(40rem)] 
            md:max-h-[calc(48rem)] 
            lg:max-h-[calc(64rem)] 
            xl:max-h-[calc(80rem)] 
            2xl:max-h-[calc(96rem)] 
            mx-auto'>
        <div className="rounded-2xl overflow-hidden -top-[72px] left-0 absolute w-full h-full">
          <BlogHomePageSlider />
        </div>
      </div>
      <BlogCardsSlider />
    </div >
  );
}

export default Blog;
