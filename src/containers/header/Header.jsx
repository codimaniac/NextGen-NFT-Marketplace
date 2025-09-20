import { Button, ListedBrands, NavBar } from '../../components'
import HeroImg from "../../assets/Hero-Img.png"

const Header = () => {
  return (
    <>
        <NavBar />
        <div className="flex flex-col items-center section__margin" id="home">
          <div className="flex flex-col">
            <h1 className="text-5xl font-extrabold leading-[121%] clipped-img bg-clip-text text-transparent pt-6">
              Best NFTs Marketplace.
            </h1>
            <p className="text-xs font-light leading-[183%] mt-6">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget congue sit. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <div className="flex gap-4 mt-6">
              <Button className="gradient-lin-bg">Get Started</Button>
              <button className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer"><div className="bg-[var(--primary-color)] w-full h-full pt-[8px] pb-[8px] pl-[24px] pr-[24px] md:pt-[4px] md:pb-[4px] md:pl-[12px] md:pr-[12px]">Create NFTs</div></button>
            </div>
          </div>
          <div className="w-90 h-90 mt-8 rounded-[50%] bg-[#869bdf08] border-4 border-[#5354880b]">
            <img src={HeroImg} alt="Hero Image" className="h-full w-auto"/>
          </div>
        </div>
        <ListedBrands />
    </>
  )
}

export default Header