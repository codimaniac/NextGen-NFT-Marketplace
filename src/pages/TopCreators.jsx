import { CreatorsCarousel } from "../containers"
import { nftCreators } from "./import"

const TopCreators = () => {
  return (
    <CreatorsCarousel title="Our Best Creators" items={nftCreators}/>
  )
}

export default TopCreators