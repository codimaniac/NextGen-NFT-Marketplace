import { CollectionsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"

const Collectibles = () => {
  const [collections, isLoading, isError] = useGetData('http://localhost:3000/Collections')

  if (isLoading) {
      return (
          <div className="flex items-center justify-center !mt-20 section__margin">
              <div className="loader"></div>
          </div>
      )
  }

  if (isError) {
      return (
          <div className="flex items-center justify-center !mt-20 section__margin">
              <span className="text-2xl font-bold">{isError}</span>
          </div>
      )
  }

  return (
    <CollectionsCarousel title="Our Collections" items={collections}/>
  )
}

export default Collectibles