import { BlogCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"

const Blog = () => {
  const [info] = useGetData('http://localhost:3000/Blogs')

  return (
    <BlogCarousel title="Our Blogs" items={info}/>
  )
}

export default Blog