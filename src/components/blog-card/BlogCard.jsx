const BlogCard = ({blog_title, blog_category, blog_image}) => {
  return (
    <div className="flex flex-col gap-1 justify-center bg-[#16192a] border-2 border-[#2e3150] w-80 h-auto p-6 lg:p-4 lg:w-55 lg:text-[13px] xl:w-65 xl:text-sm">
        <img src={blog_image} alt={blog_title} className="flex-1 w-fit"/>
        <span className="mt-4 text-xs text-[var(--accent-color)] cursor-pointer lg:text-[11px] xl:text-xs">{blog_category}</span>
        <p className="text-[var(--light-color)]">{blog_title}</p>
    </div>
  )
}

export default BlogCard