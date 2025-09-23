import { Button } from "../../components"
import CreatorCard from "../../components/creator-card/CreatorCard"
import { nftCreators } from "./import"

const TopCreators = () => {
  return (
    <div className="flex flex-col items-center section__margin">
        <h2 className="text-3xl font-black lg:text-4xl mt-20">Top Creators</h2>
        <p className="text-sm text-[var(--gray-color)] text-center font-light leading-[183%] mt-4 lg:w-3/5">In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio posuere ac in in nisl sed augue.</p>
        <Button className="gradient-lin-bg mt-4">View all Creators</Button>
        <div className="flex flex-col justify-between gap-12 mt-12 lg:flex-row lg:gap-4">
            {
                nftCreators.map((nftCreator, id) => {
                    return (
                        <CreatorCard key={id} creator_name={nftCreator.creator_name} creator_pfp={nftCreator.creator_pfp}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TopCreators