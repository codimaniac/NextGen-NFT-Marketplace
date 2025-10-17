import { Shade } from '../components'
import { CollectNFTs, Header, LatestBlog, Newsletter, NFTsCollections, TopCreators } from '../containers'

const Homepage = () => {
  return (
    <>
      <Header />
      <CollectNFTs title="Collect Some NFTs" />
      <TopCreators />
      <Newsletter />
      <NFTsCollections />
      <LatestBlog />
    </>
  )
}

export default Homepage