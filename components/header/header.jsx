import GetPostMetaData from "@/utill/get-post-meta-data";
import Nav from "./nav";

const getSlugs = GetPostMetaData('blog-posts-files').map((item) => `/blog/${item.slug}`)
const slugs = [
  '/about', '/', '/blog', ...getSlugs
]


const Header = () => {
  console.log(slugs)
  return (
    <Nav slugs={slugs} />
  );
}

export default Header;
