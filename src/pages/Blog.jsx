import { BlogCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"

const Blog = () => {
  const [Blogs, isLoading, isError] = useGetData('http://localhost:3000/Blogs')

  if (isLoading) {
      return (
          <div className="flex items-center justify-center !mt-20 section__margin">
              <div className="loader"></div>
          </div>
      )
  }

  if (isError) {
      return (
          <div className="flex items-center justify-center !mt-20 section__margin">
              <span className="text-2xl font-bold">{isError}</span>
          </div>
      )
  }

  return (
    <BlogCarousel title="Our Blogs" items={Blogs}/>
  )
}

export default Blog