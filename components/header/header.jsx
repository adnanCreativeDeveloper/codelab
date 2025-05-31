import GetPostMetaData from "@/utill/get-post-meta-data";
import Nav from "./nav";

const getSlugs = GetPostMetaData('blog-posts-files').map((item) => item.slug)
const slugs = [
  'about', '/', '/blog', ...getSlugs
]

const Header = () => {
  return (
    <Nav slugs={slugs} />
  );
}

export default Header;
