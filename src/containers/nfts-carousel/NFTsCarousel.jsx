import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import { useCarousel } from "../../hooks/useCarousel"
import { Button, NFTsCard } from "../../components"
import { Link } from "react-router-dom"

const NFTsCarousel = ({items, itemsPerSlide}) => {
  const [currentPage, currentSlide, slidePageNumbers, prevPage, nextPage] = useCarousel(items, itemsPerSlide)
     if (items.length == 0) {
      return (
        <div className="flex flex-col gap-4 w-full h-full items-center justify-center rounded-[10px] bg-[#16192a] border-2 border-[#2e3150] p-20 section__margin">
          <h3 className="text-[var(--lighter-color)] text-2xl text-center font-light leading-[183%]">There are no items to display</h3>
          <Button className="gradient-lin-bg"><Link to="/">Go Back to Home</Link></Button>
        </div>
      )
     }
  
     return (
      <>
        <div className="flex flex-col w-full gap-x-4 gap-y-32 mt-2 lg:flex-row lg:flex-wrap">
          {
              currentSlide.map((item) => {
                  return (
                      <NFTsCard key={item.id} id={item.id} nft={item.nft} name={item.name} price={item.price} creator={item.creator} creator_pfp={item.creator_pfp}/>
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