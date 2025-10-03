import { StatCard } from "../../components"

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 mt-12 w-full section__margin md:flex-row md:flex-wrap md:gap-y-4 md:gap-x-[3px] lg:gap-4">
        <StatCard stat="Total NFTs" value={450}/>
        <StatCard stat="Our Creators" value={260}/>
        <StatCard stat="Total Customers" value={920}/>
        <StatCard stat="Earnings" value={2530}/>
    </div>
  )
}

export default Stats