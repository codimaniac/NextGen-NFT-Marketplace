import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import { useCarousel } from "../../hooks/useCarousel"
import { CollectionCard } from "../../components"
import { IoMdArrowDropdown } from "react-icons/io"

const CollectionsCarousel = ({title, items}) => {
  const [currentPage, currentSlide, slidePageNumbers, prevPage, nextPage] = useCarousel(items, 8)

   return (
    <div className="flex flex-col gap-4 items-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">{title}</h1>
      {/* <div className="flex justify-between w-full mt-12">
        <span>Showing all 9 results</span>
        <span className="flex items-center gap-2">Sort by latest <IoMdArrowDropdown /> </span>
      </div> */}
      <div className="flex flex-col w-full gap-4 lg:flex-row lg:flex-wrap">
        {
            currentSlide.map((item, id) => {
                return (
                    <CollectionCard key={id} collection_name={item.name} collection_image={item.image}/>
                )
            })
        }
      </div>
      <div className="flex items-center gap-8 mt-6">
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

export default CollectionsCarousel