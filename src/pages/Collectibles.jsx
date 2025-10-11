import { CollectionsCarousel } from "../containers"
import { collectionsDetails } from "./import"

const Collectibles = () => {
  return (
    <CollectionsCarousel title="Our Collections" items={collectionsDetails}/>
  )
}

export default Collectibles