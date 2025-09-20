import { ListedBrand1, ListedBrand2, ListedBrand3, ListedBrand4, ListedBrand5 } from "./import"

const ListedBrands = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 pt-6 section__margin md:gap-6 md:justify-between">
        <img src={ListedBrand1} alt="Minicoin" className="h-3.5 w-auto md:h-4.5 lg:h-6"/>
        <img src={ListedBrand2} alt="Blocktual" className="h-4 w-auto md:h-5 lg:h-6.5"/>
        <img src={ListedBrand3} alt="NextPlanet" className="h-4 w-auto md:h-5 lg:h-6.5"/>
        <img src={ListedBrand4} alt="Jackpot" className="h-4 w-auto md:h-5 lg:h-6.5"/>
        <img src={ListedBrand5} alt="TopUp" className="h-3.5 w-auto md:h-4.5 lg:h-6"/>
    </div>
  )
}

export default ListedBrands