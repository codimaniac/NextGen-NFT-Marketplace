import { NFTsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io"
import { Button } from "../components"

const Marketplace = () => {
    const [nfts, isLoading, isError] = useGetData('http://localhost:3000/NFTs')

    if (isLoading) {
        return (
            <div className="flex items-center justify-center !mt-20 section__margin">
                <div className="loader"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex flex-col gap-4 items-center justify-center rounded-[10px] bg-[#16192a] border-2 border-[#2e3150] h-auto p-12 section__margin">
                <p className="text-2xl lg:text-4xl">{isError}!</p>
                <p className="text-[var(--lighter-color)] text-[10px] text-center font-light leading-[183%]">
                    Server not accessible. Please try again later.
                </p>
                <Button className="gradient-lin-bg"><Link to="/">Go Back to Home</Link></Button>
            </div>
        )
    }
    
    return (
        <div className="flex flex-col gap-4 items-center section__margin">
            <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">Explore NFTs</h1>
            <div className="flex justify-between mt-2 px-2 bg-[#16192a] border-2 border-[#2e3150] w-80 rounded-full text-xs md:w-90 lg:w-100">
                <input type="text" name="search" id="search" placeholder="Search your items here..." className="w-full outline-0 p-4" />
                <span className="flex items-center gap-2 px-4"><IoMdSearch size={28} /> </span>
            </div>
            <ul className="hidden flex-row font-light text-sm mt-2 sm:hidden md:gap-8 lg:flex xl:gap-14">
                <li><Link to="/" className="no-underline hover:text-[var(--accent-color)]">All</Link></li>
                <li><Link to="/marketplace" className="no-underline hover:text-[var(--accent-color)]">Wall Art</Link></li>
                <li><a href="#artist" className="no-underline hover:text-[var(--accent-color)]">Game</a></li>
                <li><a href="#community" className="no-underline hover:text-[var(--accent-color)]">Character</a></li>
                <li><Link to="/marketplace" className="no-underline hover:text-[var(--accent-color)]">Art</Link></li>
                <li><a href="#artist" className="no-underline hover:text-[var(--accent-color)]">Painting</a></li>
                <li><a href="#community" className="no-underline hover:text-[var(--accent-color)]">Others</a></li>
            </ul>
            <NFTsCarousel items={nfts} itemsPerSlide={8} />
        </div>
    )
}

export default Marketplace