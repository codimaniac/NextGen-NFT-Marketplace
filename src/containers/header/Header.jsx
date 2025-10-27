import { Button, ListedBrands } from "../../components";
import HeroImg from "../../assets/Hero-Img.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        className="flex flex-col items-center section__margin md:flex-row md:gap-4 lg:!mt-15"
        id="home"
      >
        <div className="flex flex-col md:flex-1">
          <h1 className="text-5xl font-extrabold leading-[121%] clipped-img pt-6">
            Best NFTs Marketplace.
          </h1>
          <p className="text-xs font-light leading-[183%] mt-6">
            Ultrices eget pretium sit euismod mi id. In commodo auctor eget
            congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
            Porta aenean egestas malesuada in pulvinar enim viverra.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className="gradient-lin-bg">
              <Link
                to="/marketplace"
                className="block w-full h-full py-[8px] px-[24px]"
              >
                Get Started
              </Link>
            </Button>
            <button className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer">
              <div className="bg-[var(--primary-color)] w-full h-full">
                <Link to="/create-item" className="block w-full h-full py-[8px] px-[24px] md:py-[4px] md:px-[12px]">Create NFTs</Link>
              </div>
            </button>
          </div>
        </div>
        <div className="w-85 h-85 mt-8 rounded-[50%] bg-[#869bdf08] border-4 border-[#5354880b]  md:mt-0 md:h-80 md:w-80 lg:h-110 lg:w-110 xl:h-139 xl:w-139">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="h-full w-auto rounded-full"
          />
        </div>
      </div>
      <ListedBrands />
    </>
  );
};

export default Header;
