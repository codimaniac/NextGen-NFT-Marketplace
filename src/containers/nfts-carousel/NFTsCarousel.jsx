import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import { useCarousel } from "../../hooks/useCarousel"
import { NFTsCard } from "../../components"

const NFTsCarousel = ({items}) => {
  const [currentPage, currentSlide, slidePageNumbers, prevPage, nextPage] = useCarousel(items, 9)
  
     return (
      <>
        <div className="flex flex-col justify-center gap-x-4 gap-y-32 mt-2 lg:flex-row lg:flex-wrap">
          {
              currentSlide.map((item, id) => {
                  return (
                      <NFTsCard key={id} nft={item.nft} name={item.name} price={item.price} creator={item.creator} creator_pfp={item.creator_pfp}/>
                  )
              })
          }
        </div>
        <div className="flex items-center gap-8 mt-24">
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
      </>
    )
}

export default NFTsCarousel