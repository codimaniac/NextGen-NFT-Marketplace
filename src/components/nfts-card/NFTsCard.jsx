import { Link } from "react-router-dom"
import Button from "../button/Button"

const NFTsCard = ({id, nft, name, price, creator, creator_pfp}) => {
  return (
    <div className="relative flex w-[250px] items-center text-[var(--primary-color)] lg:text-xs">
        <div className="h-76 w-130 overflow-hidden"><img src={nft} alt={name} className="w-full h-full object-cover object-center rounded-[10px]"/></div>
        <div className="absolute z-50 top-7/10 left-1/20 w-9/10 flex flex-col gap-2 bg-[var(--light-color)] p-6 rounded-3xl">
            <div className="flex justify-between font-extrabold">
                <span>{name}</span>
                <span>{price} ETH</span>
            </div>
            <div className="flex items-center gap-2">
                <img src={creator_pfp} alt={creator} className="w-8"/>
                <span>{creator}</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-between">
              <button className="text-xs w-full border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer rounded-[10px]"><div className="bg-[var(--light-color)] w-full h-full py-[8px] px-[24px] rounded-[10px] md:py-[4px] md:px-[12px]"><Link to={`/nft/${id}`}>View Details</Link></div></button>
              <Button className="gradient-lin-bg w-full text-xs text-[var(--light-color)] rounded-[10px]">Buy It Now</Button>
            </div>
        </div>
    </div>
  )
}

export default NFTsCard