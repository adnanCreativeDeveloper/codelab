import GetPostMetaData from '@/utill/get-post-meta-data';
import PostCard from './post-card';
const blog_arr = GetPostMetaData('blog-posts-files')
const SuggestedPosts = () => {



  const getRandomNumber = () => {
    const min = 4;
    const max = 7;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  const numberOfPosts = getRandomNumber();
  return (
    <PostCard blog_arr={blog_arr} />

  );
}

export default SuggestedPosts;
