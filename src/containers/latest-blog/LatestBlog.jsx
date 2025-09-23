import { BlogCard, Button } from "../../components"
import { blogDetails } from "./import"

const LatestBlog = () => {
  return (
    <div className="flex flex-col items-center section__margin !mt-20">
        <div className="flex flex-col items-center justify-between gap-4 w-full lg:flex-row">
            <h2 className="text-3xl font-black lg:text-4xl">Our Latest Blog</h2>
            <Button className="gradient-lin-bg">Read Our Blogs</Button>
        </div>
        <div className="flex flex-col items-center justify-between gap-12 mt-12 w-full lg:flex-row lg:gap-4">
            {
                blogDetails.map((blogDetail, id) => {
                    return (
                        <BlogCard key={id} blog_title={blogDetail.title} blog_category={blogDetail.category} blog_image={blogDetail.image}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LatestBlog