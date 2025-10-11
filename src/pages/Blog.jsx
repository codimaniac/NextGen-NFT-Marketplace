import { BlogCarousel } from "../containers"
import { blogDetails } from "./import"

const Blog = () => {
  return (
    <BlogCarousel title="Our Blogs" items={blogDetails}/>
  )
}

export default Blog