import { Link } from "react-router-dom";
import AboutBanner from "../assets/about-banner.png";
import { Button } from "../components";
import { LatestBlog, Stats } from "../containers";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4 items-center section__margin">
        <h2 className="text-3xl font-extrabold lg:text-4xl mt-20">About Us</h2>
        <img
          src={AboutBanner}
          alt="About Banner"
          className="w-full h-auto rounded-[10px]"
        />
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="flex flex-col flex-1 gap-6">
            <h2 className="text-3xl font-extrabold lg:text-4xl mt-20">
              Why To Trust Us
            </h2>
            <p className="text-xs font-light leading-[183%]">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <Button className="gradient-lin-bg w-fit">
              <Link
                to="/blog"
                className="block w-full h-full py-[8px] px-[24px]"
              >
                Read Our Blogs
              </Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <h2 className="text-3xl font-extrabold lg:text-4xl mt-20">
              Our Main Motive
            </h2>
            <p className="text-xs font-light leading-[183%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              aspernatur.
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col flex-1 gap-6">
            <h2 className="text-3xl font-extrabold lg:text-4xl mt-20">
              You Can Create, Sell And Collect Best NFTs From NextGen
            </h2>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <p className="text-xs font-light leading-[183%] lg:mt-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              asperiores voluptates, tempora, inventore perspiciatis deserunt
              nobis harum id iusto nam, eius sit adipisci aut sed hic illo
              beatae repellendus reprehenderit repudiandae similique impedit.
              Vero odit dolorem earum excepturi nisi aut, blanditiis ipsum nemo
              asperiores, dolor laboriosam maiores illum! Impedit, perspiciatis!
            </p>
          </div>
        </div>
        <Stats />
        <div className="flex flex-col gap-4 items-center pb-20 rounded-[10px] bg-[url('/src/assets/discover-nfts-banner.jpg')] bg-cover bg-center bg-no-repeat">
          <h2 className="text-3xl text-center font-black lg:text-4xl mt-20">
            Discover And Collect Best NFTs
          </h2>
          <p className="text-xs text-center font-light leading-[183%] lg:mt-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, a
            dolor sequi omnis eaque eveniet exercitationem reprehenderit
            obcaecati impedit? Doloribus, error repellendus sit quod voluptate
            est.
          </p>
          <div className="flex gap-4">
            <Button className="gradient-lin-bg">
              <Link
                to="/marketplace"
                className="block w-full h-full py-[8px] px-[24px]"
              >
                Explore NFTs
              </Link>
            </Button>
            <button className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer">
              <div className="bg-[var(--primary-color)] w-full h-full">
                <Link
                  to="/support"
                  className="block w-full h-full py-[8px] px-[24px] md:py-[4px] md:px-[12px]"
                >
                  Contact Us
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
      <LatestBlog />
    </>
  );
};

export default About;
