import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "./blog-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogCardsSlider = () => {

  return (
    <section>
      <div className='container p-2 mx-auto'>
        <div className='relative rounded-lg md:rounded-2xl'>
          <button
            className='absolute z-50 grid ml-2 transition-all duration-300 ease-in-out -translate-y-1/2 rounded-full cursor-pointer blog-prev top-1/2 left-2 md:left-4 place-items-center size-8 bg-red-500/40 hover:bg-red-500/50 md:ml-4'>
            <FontAwesomeIcon icon={faAngleLeft} className='text-white' />
          </button>

          <button
            className='absolute z-50 grid mr-2 transition-all duration-300 ease-in-out -translate-y-1/2 rounded-full cursor-pointer blog-next top-1/2 right-2 md:right-4 place-items-center size-8 bg-red-500/40 hover:bg-red-500/50 md:mr-4'>
            <FontAwesomeIcon icon={faAngleRight} className='text-white' />
          </button>
          <BlogCard />
        </div>
      </div>
    </section >
  );
}

export default BlogCardsSlider;
