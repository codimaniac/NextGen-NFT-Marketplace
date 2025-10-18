import { CreatorsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"

const TopCreators = () => {
  const [creators, isLoading, isError] = useGetData('http://localhost:3000/Creators')

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
    <CreatorsCarousel title="Our Best Creators" items={creators}/>
  )
}

export default TopCreators