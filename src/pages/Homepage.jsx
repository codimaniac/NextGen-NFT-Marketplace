import { Shade } from '../components'
import { CollectNFTs, Header, LatestBlog, Newsletter, NFTsCollections, TopCreators } from '../containers'

const Homepage = () => {
  return (
    <>
        <Header />
        <Shade className="w-150 h-150 lg:top-220 lg:w-250 lg:h-250"/>
        <CollectNFTs />
        <Shade className="w-60 h-60 left-2/3 lg:top-400 lg:right-[-20%] lg:w-150 lg:h-150"/>
        <TopCreators />
        <Newsletter />
        <NFTsCollections />
        <LatestBlog />
    </>
  )
}

export default Homepage