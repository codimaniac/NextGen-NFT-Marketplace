import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import BlogCard from "../../components/blog-card/BlogCard"
import { useCarousel } from "../../hooks/useCarousel"

const BlogCarousel = ({title, items}) => {
  const [currentPage, currentSlide, slidePageNumbers, prevPage, nextPage] = useCarousel(items, 8)

  return (
    <div className="flex flex-col gap-4 items-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">{title}</h1>
      <div className="flex flex-wrap items-center justify-center gap-12 mt-12 w-full lg:flex-row lg:gap-4">
        {
            currentSlide.map((item, id) => {
                return (
                    <BlogCard key={id} blog_title={item.title} blog_category={item.category} blog_image={item.image}/>
                )
            })
        }
      </div>
      <div className="flex items-center gap-8">
        <MdOutlineChevronLeft size={36} onClick={currentPage!=1 ? prevPage : null} className={`${currentPage==1 ? "text-transparent" : "cursor-pointer"}`}/>
        <div className="flex gap-6 font-bold">
          {
            slidePageNumbers.map((no, index) => {
              return (
                <span key={index} className={currentPage==no ? "gradient-text" : null}>{no}</span>
              )
            })
          }
        </div>
        <MdOutlineChevronRight size={36} onClick={currentPage!=slidePageNumbers.length ? nextPage : null} className={`${currentPage==slidePageNumbers.length ? "text-transparent" : "cursor-pointer"}`}/>
      </div>
    </div>
  )
}

export default BlogCarousel