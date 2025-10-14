import { CollectionsCarousel } from "../containers"
import { useGetData } from "../hooks/useFetch"

const Collectibles = () => {
  const [info] = useGetData('http://localhost:3000/Collections')

  return (
    <CollectionsCarousel title="Our Collections" items={info}/>
  )
}

export default Collectibles