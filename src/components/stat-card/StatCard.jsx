const StatCard = ({stat, value}) => {
  return (
    <div className="flex flex-col flex-1 gap-4 items-center justify-center rounded-[10px] bg-[#16192a] border-2 border-[#2e3150] w-80 h-auto p-12 md:p-8 lg:w-55 lg:text-[13px] xl:w-65 xl:text-sm">
        <h2 className="text-5xl font-black lg:text-7xl gradient-text">{value}</h2>
        <p className="font-bold text-xl md:text-lg">{stat}</p>
    </div>
  )
}

export default StatCard