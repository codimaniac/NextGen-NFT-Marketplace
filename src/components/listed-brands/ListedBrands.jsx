import { ListedBrand1, ListedBrand2, ListedBrand3, ListedBrand4, ListedBrand5 } from "./import"

const ListedBrands = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 pt-6 section__margin">
        <img src={ListedBrand1} alt="Minicoin" className="h-3.5 w-auto"/>
        <img src={ListedBrand2} alt="Blocktual" className="h-4 w-auto"/>
        <img src={ListedBrand3} alt="NextPlanet" className="h-4 w-auto"/>
        <img src={ListedBrand4} alt="Jackpot" className="h-4 w-auto"/>
        <img src={ListedBrand5} alt="TopUp" className="h-3.5 w-auto"/>        
    </div>
  )
}

export default ListedBrands