import AboutBanner from "../assets/about-banner.png"
import { Button } from "../components"
import { LatestBlog, Stats } from "../containers"

const About = () => {
  return (
    <div className="flex flex-col gap-4 items-center section__margin">
        <h2 className="text-3xl font-black lg:text-4xl mt-20">About Us</h2>
        <img src={AboutBanner} alt="About Banner" className="w-full h-auto rounded-[10px]"/>
        <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="flex flex-col flex-1 gap-6">
                <h2 className="text-3xl font-black lg:text-4xl mt-20">Why To Trust Us</h2>
                <p className="text-xs font-light leading-[183%]">
                    Ultrices eget pretium sit euismod mi id. In commodo auctor eget congue sit. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.
                </p>
                <Button className="gradient-lin-bg w-fit">Read Our Blogs</Button>
            </div>
            <div className="flex flex-col flex-1 gap-6">
                <h2 className="text-3xl font-black lg:text-4xl mt-20">Our Main Motive</h2>
                <p className="text-xs font-light leading-[183%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aspernatur.
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
                <h2 className="text-3xl font-black lg:text-4xl mt-20">You Can Create, Sell And Collect Best NFTs From NextGen</h2>
            </div>
            <div className="flex flex-col flex-1 gap-6">
                <p className="text-xs font-light leading-[183%] lg:mt-14">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores voluptates, tempora, inventore perspiciatis deserunt nobis harum id iusto nam, eius sit adipisci aut sed hic illo beatae repellendus reprehenderit repudiandae similique impedit. Vero odit dolorem earum excepturi nisi aut, blanditiis ipsum nemo asperiores, dolor laboriosam maiores illum! Impedit, perspiciatis!
                </p>
            </div>
        </div>
        <Stats />
        <LatestBlog /> 
    </div>
  )
}

export default About