import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import BlogCard from "../../components/blog-card/BlogCard"
import { useState } from "react"

const NFTsCarousel = ({title, items}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const prevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  return (
    <div className="flex flex-col gap-4 items-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">{title}</h1>
      <div className="flex flex-wrap items-center justify-center gap-12 mt-12 w-full lg:flex-row lg:gap-4">
        {
            items.map((item, id) => {
                return (
                    <BlogCard key={id} blog_title={item.title} blog_category={item.category} blog_image={item.image}/>
                )
            })
        }
      </div>
      <div className="flex items-center gap-8">
        <MdOutlineChevronLeft size={36} onClick={currentPage!=1 ? prevPage : null} className={`${currentPage==1 ? "text-transparent" : "cursor-pointer"}`}/>
        <div className="flex gap-6 font-bold">
          <span className={currentPage==1 && "gradient-text"}>1</span>
          <span className={currentPage==2 && "gradient-text"}>2</span>
          <span className={currentPage==3 && "gradient-text"}>3</span>
        </div>
        <MdOutlineChevronRight size={36} onClick={currentPage!=3 ? nextPage : null} className={`${currentPage==3 ? "text-transparent" : "cursor-pointer"}`}/>
      </div>
    </div>
  )
}

export default NFTsCarousel