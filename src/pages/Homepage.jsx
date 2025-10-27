import { useEffect } from 'react'
import { Shade } from '../components'
import { CollectNFTs, Header, LatestBlog, Newsletter, NFTsCollections, TopCreators } from '../containers'

const Homepage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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