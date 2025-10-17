import { Link, Route, Routes, useParams, useResolvedPath } from "react-router-dom"
import { useGetData } from "../hooks/useFetch"
import { CollectNFTs } from "../containers"
import { IoMdShare } from "react-icons/io"
import { Button } from "../components"

const ProductDescription = ({full_desc}) => {
    return (
        <div className="flex flex-col gap-4 bg-[#16192a] border-1 border-[#2e3150] p-8 my-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
            <div className="">Product Description</div>
            <div>{full_desc}</div>
        </div>
    )
}

const AdditionalInfo = ({full_desc}) => {
    return (
        <div className="flex flex-col gap-4 bg-[#16192a] border-1 border-[#2e3150] p-8 my-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
            <div className="">Additional Info</div>
            <div>{full_desc}</div>
        </div>
    )
}

const Review = ({full_desc}) => {
    return (
        <div className="flex flex-col gap-4 bg-[#16192a] border-1 border-[#2e3150] p-8 my-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
            <div className="">Review</div>
            <div>{full_desc}</div>
        </div>
    )
}

const NFTDetail = () => {
    const {id} = useParams()
    const basePath = `/nft/${id}`
    const path = useResolvedPath("").pathname

    console.log(path)
     
    const [info] = useGetData(`http://localhost:3000/NFTs/${id}`)

    return (
        <>
            <div className="flex flex-col gap-8 items-center section__margin">
                <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">Item Details</h1>                
                <div className="flex flex-col w-full gap-12 lg:flex-row">
                    <img src={info.nft} alt={info.name} className="w-full h-auto flex-1 lg:w-1/2"/>
                    <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-extrabold lg:text-3xl">{info.name}</h2>
                            <div className="bg-[#16192a] border-1 border-[#2e3150] p-2 rounded-full"><IoMdShare size={18}/></div>
                        </div>
                        <div className="flex gap-4 text-sm mt-2">
                            <span className="font-light">Current Price:</span>
                            <span className="font-extrabold">{info.price} ETH</span>
                        </div>
                        <div className="flex items-center gap-2 mt-8">
                            <img src={info.creator_pfp} alt={info.creator} className="rounded-full w-10"/>
                            <span className="text-sm">@{info.creator}</span>
                        </div>
                        <div className="flex flex-col gap-1 bg-[#16192a] border-1 border-[#2e3150] p-8 mt-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
                            <div>{info.short_desc}</div>
                            <div className="flex items-center gap-2 my-4">
                                <img src={info.owner_pfp} alt={info.owner} className="rounded-full w-10"/>
                                <div className="flex flex-col">
                                    <span className="text-xs">@{info.owner}</span>
                                    <span className="text-xs">Owner</span>
                                </div>
                            </div>
                            <div><span className="font-medium">Collection: </span>{info.collections?.join(', ')}</div>
                            <div><span className="font-medium">Token ID: </span>{info.id}</div>
                        </div>
                        <Button className="gradient-lin-bg w-3/5 rounded-[10px] font-light mt-8">Buy It Now</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 section__margin">                
                <ul className="flex flex-row justify-between w-full font-bold text-[var(--light-purple)] text-sm mt-2 md:justify-center md:gap-8 xl:gap-14">
                    <li><Link to={basePath} className={`${path==`/nft/${id}` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Details</Link></li>
                    <li><Link to={`${basePath}/additional-info`} className={`${path==`/nft/${id}/additional-info` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Additional Information</Link></li>
                    <li><Link to={`${basePath}/review`} className={`${path==`/nft/${id}/review` ? 'text-[var(--light-color)]' : ''} no-underline hover:text-[var(--accent-color)]`}>Review ({info.review?.length})</Link></li>
                </ul>
                <Routes>
                    <Route index element={<ProductDescription full_desc={info.full_desc}/>} />
                    <Route path="additional-info" element={<AdditionalInfo full_desc={info.full_desc}/>} />
                    <Route path="review" element={<Review full_desc={info.full_desc}/>} />
                </Routes>
            </div>
            <CollectNFTs title="Related NFTs" />
        </>
    )
}

export default NFTDetail