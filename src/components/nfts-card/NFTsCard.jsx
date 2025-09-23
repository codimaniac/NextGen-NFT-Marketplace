import Button from "../button/Button"

const NFTsCard = ({nft, name, price, creator, creator_pfp}) => {
  return (
    <div className="relative flex flex-1 items-center text-[var(--primary-color)] lg:text-sm">
        <img src={nft} alt={name} className="rounded-[10px]"/>
        <div className="absolute z-50 top-4/5 left-1/20 w-9/10 flex flex-col gap-4 bg-[var(--light-color)] p-6 rounded-3xl">
            <div className="flex justify-between font-extrabold">
                <span>{name}</span>
                <span>{price} ETH</span>
            </div>
            <div className="flex items-center gap-2">
                <img src={creator_pfp} alt={creator} className="w-8"/>
                <span>{creator}</span>
            </div>
            <Button className="gradient-lin-bg text-[var(--light-color)] rounded-[10px]">Buy It Now</Button>
        </div>
    </div>
  )
}

export default NFTsCard