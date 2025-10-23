import { Link, Route, Routes, useParams, useResolvedPath } from "react-router-dom"
import { NFTsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"
import { IoMdArrowDropdown } from "react-icons/io"

const CreatorProfile = () => {
    const {id} = useParams()
    const basePath = `/creator-profile/${id}`
    const path = useResolvedPath().pathname
    const [Creator] = useGetData(`http://localhost:3000/Creators/${id}`)
    const [NFTs] = useGetData(`http://localhost:3000/NFTs`)
    const creatorCollections = NFTs.filter(nft => nft.creator == Creator.creator_name)

    return (
        <div className="flex flex-col gap-4 items-center section__margin">
            <div className="relative flex bg-[#16192a] border-1 border-[#2e3150] w-full h-50 mb-25 lg:mb-0">
                <div className="absolute top-[110%] left-1/2 translate-[-50%] flex flex-col items-center gap-2">
                    <img src={Creator?.creator_pfp} alt={Creator?.creator_name} className="w-36 h-36 rounded-full shadow-lg shadow-[#2e3150]" />
                    <span className="font-bold">{Creator?.creator_name}</span>
                    <span className="text-xs font-light">@{Creator?.creator_name}</span>
                </div>
            </div>
            <ul className="hidden flex-row font-bold text-[var(--light-purple)] text-sm mt-35 sm:hidden md:gap-8 lg:flex xl:gap-14">
                <li><Link to={basePath} className={`${path==`/creator-profile/${id}` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Product</Link></li>
                <li><Link to={`${basePath}/about-product`} className={`${path==`/creator-profile/${id}/about-product` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>About</Link></li>
                <li><Link to={`${basePath}/product-policies`} className={`${path==`/creator-profile/${id}/product-policies` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Policies</Link></li>
                <li><Link to={`${basePath}/product-review`} className={`${path==`/creator-profile/${id}/product-review` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Review</Link></li>
            </ul>
            <div className="flex justify-between w-full mt-8 font-light">
                <span>Showing all 9 results</span>
                <span className="flex items-center gap-2">Sort by latest <IoMdArrowDropdown /> </span>
            </div>
            <Routes>
                <Route index element={<NFTsCarousel items={creatorCollections} itemsPerSlide={8} />} />
            </Routes>
        </div>
    )
}

export default CreatorProfile