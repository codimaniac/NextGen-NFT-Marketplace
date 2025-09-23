import Button from "../button/Button"

const CreatorCard = ({creator_name, creator_pfp}) => {
  return (
    <div className="relative flex flex-col lg:text-xs">
        <div className="flex flex-col items-center justify-center bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-20 py-12 lg:px-15 lg:py-10">
            <img src={creator_pfp} alt={creator_name} className="flex-1 rounded-[50%] w-35 h-35"/>
            <span className="mt-4">{creator_name}</span>
        </div>
        <Button className="absolute left-1/2 top-full translate-[-50%] gradient-lin-bg rounded-[10px] w-max">View Details</Button>
    </div>
  )
}

export default CreatorCard