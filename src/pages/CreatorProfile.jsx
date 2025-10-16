import { Link } from "react-router-dom"
import { NFTsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"
import { IoMdArrowDropdown } from "react-icons/io"

const CreatorProfile = () => {
    const [info] = useGetData('http://localhost:3000/NFTs')
    const creator = info[0]
    console.log(creator)

    return (
        <div className="flex flex-col gap-4 items-center section__margin">
            <div className="relative flex bg-[#16192a] border-1 border-[#2e3150] w-full h-50">
                <div className="absolute top-[110%] left-1/2 translate-[-50%] flex flex-col items-center gap-2">
                    <img src={creator?.creator_pfp} alt={creator?.creator} className="rounded-full shadow-lg shadow-[#2e3150]" />
                    <span className="font-bold">{creator?.creator}</span>
                    <span className="text-xs font-light">@{creator?.creator}</span>
                </div>
            </div>
            <ul className="hidden flex-row font-light text-sm mt-40 sm:hidden md:gap-8 lg:flex xl:gap-14">
                <li><Link to="/" className="no-underline hover:text-[var(--accent-color)]">Product</Link></li>
                <li><Link to="/marketplace" className="no-underline hover:text-[var(--accent-color)]">About</Link></li>
                <li><a href="#artist" className="no-underline hover:text-[var(--accent-color)]">Policies</a></li>
                <li><a href="#community" className="no-underline hover:text-[var(--accent-color)]">Review</a></li>
            </ul>
            <div className="flex justify-between w-full mt-12 font-light">
                <span>Showing all 9 results</span>
                <span className="flex items-center gap-2">Sort by latest <IoMdArrowDropdown /> </span>
            </div>
            <NFTsCarousel items={info} itemsPerSlide={8} />
        </div>
    )
}

export default CreatorProfile