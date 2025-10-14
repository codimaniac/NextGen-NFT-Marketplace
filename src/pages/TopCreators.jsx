import { CreatorsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"

const TopCreators = () => {
  const [info] = useGetData('http://localhost:3000/Creators')
  return (
    <CreatorsCarousel title="Our Best Creators" items={info}/>
  )
}

export default TopCreators