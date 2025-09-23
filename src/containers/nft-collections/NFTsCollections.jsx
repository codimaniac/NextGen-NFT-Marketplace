import CollectionCard from "../../components/collection-card/CollectionCard"
import { collectionsDetails } from "./import"

const NFTsCollections = () => {
  return (
    <div className="flex flex-col gap-4 items-center section__margin">
        <h2 className="text-3xl font-black lg:text-4xl mt-20">NFTs collections</h2>
        <p className="text-sm text-[var(--gray-color)] text-center font-light leading-[183%] mt-4 lg:w-3/5">Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.</p>
        <div className="flex flex-col gap-4 lg:flex-row">
          {
            collectionsDetails.map((collectionsDetail, id) => {
              return (
                <CollectionCard collection_name={collectionsDetail.name} collection_image={collectionsDetail.image}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default NFTsCollections