import { NFTsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"
import { Link, Route, Routes, useResolvedPath, useSearchParams } from "react-router-dom"
import { IoMdSearch } from "react-icons/io"
import { Button } from "../components"
import { useState } from "react"

const Marketplace = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [nfts, isLoading, isError] = useGetData('http://localhost:3000/NFTs')
    const basePath = `/marketplace`
    const path = useResolvedPath("").pathname
    const filterNFTs = (searchQuery) => {
        const filteredNFTs = nfts.filter(item => item?.collections.includes(searchQuery))

        return filteredNFTs
    }

    const searchResult = nfts.filter(nft => nft?.name.toLowerCase().includes(searchQuery.toLowerCase()))

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
                <p className="text-2xl lg:text-4xl">{isError}</p>
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
                <input type="text" name="search" id="search" placeholder="Search your items here..." className="w-full outline-0 p-4" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <span className="flex items-center gap-2 px-4"><IoMdSearch size={28} /> </span>
            </div>
            <ul className="hidden flex-row text-[var(--light-purple)] text-sm mt-2 font-bold sm:hidden md:gap-8 lg:flex xl:gap-14">
                <li><Link to={basePath} className={`${path==`/marketplace` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>All</Link></li>
                <li><Link to={`${basePath}/wall-art`} className={`${path==`/marketplace/wall-art` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Wall Art</Link></li>
                <li><Link to={`${basePath}/game`} className={`${path==`/marketplace/game` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Game</Link></li>
                <li><Link to={`${basePath}/character`} className={`${path==`/marketplace/character` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Character</Link></li>
                <li><Link to={`${basePath}/art`} className={`${path==`/marketplace/art` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Art</Link></li>
                <li><Link to={`${basePath}/painting`} className={`${path==`/marketplace/painting` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Painting</Link></li>
                <li><Link to={`${basePath}/others`} className={`${path==`/marketplace/others` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Others</Link></li>
            </ul>
            <Routes>
                <Route index element={searchQuery.length == 0 && searchResult.length == 0 ? <NFTsCarousel items={nfts} itemsPerSlide={8} /> : <NFTsCarousel items={searchResult} itemsPerSlide={8} />} />
                <Route path="wall-art" element={<NFTsCarousel items={filterNFTs("Wall art")} itemsPerSlide={8} />} />
                <Route path="game" element={<NFTsCarousel items={filterNFTs("Game")} itemsPerSlide={8} />} />
                <Route path="character" element={<NFTsCarousel items={filterNFTs("Character")} itemsPerSlide={8} />} />
                <Route path="art" element={<NFTsCarousel items={filterNFTs("Art")} itemsPerSlide={8} />} />
                <Route path="painting" element={<NFTsCarousel items={filterNFTs("Painting")} itemsPerSlide={8} />} />
                <Route path="others" element={<NFTsCarousel items={filterNFTs("Others")} itemsPerSlide={8} />} />
            </Routes>
        </div>
    )
}

export default Marketplace