import { NFTsCard } from "../../components"
import { nftDetails } from "./import"

const CollectNFTs = () => {
  return (
    <div className="flex flex-col items-center section__margin gap-8" id="marketplace">
        <h2 className="text-3xl font-black lg:text-4xl mt-20">Collect Some NFTs</h2>
        <div className="flex flex-col gap-28 lg:flex-row lg:gap-8">
            {
                nftDetails.map((nftDetail, id) => {
                    return (
                        <NFTsCard key={id} nft={nftDetail.nft} name={nftDetail.name} price={nftDetail.price} creator={nftDetail.creator} creator_pfp={nftDetail.creator_pfp}/>
                    )
                })
            }
        </div>
        <div className="flex gap-4 mt-30">
            <div className="w-5 h-5 bg-[var(--light-purple)] rounded-full"></div>
            <div className="w-5 h-5 bg-[var(--lighter-color)] rounded-full"></div>
            <div className="w-5 h-5 bg-[var(--lighter-color)] rounded-full"></div>
        </div>
    </div>
  )
}

export default CollectNFTs