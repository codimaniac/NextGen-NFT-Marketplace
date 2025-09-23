import Logo from "../../assets/logo.png"
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"
import Twitter from "../../assets/Twitter.svg"
import LinkedIn from "../../assets/LinkedIn.svg"
import Youtube from "../../assets/Youtube.svg"

const Footer = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 section__margin lg:flex-row lg:gap-32">
            <div className="flex flex-col gap-2 flex-2">
                <img src={Logo} alt="Logo" className='w-28 h-auto md:w-[7rem] xl:w-[10rem]' />
                <p className="text-sm text-[var(--gray-color)] font-light leading-[183%]">Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.  Posuere ac in in nisl sed augue.</p>
                <div className="flex gap-3">
                    <span className="flex items-center justify-center w-11.5 h-11.5 border-1 bg-[#569bdf20] border-[#869bdf28] rounded-[50%] cursor-pointer"><img src={Facebook} alt="Facebook" /></span>
                    <span className="flex items-center justify-center w-11.5 h-11.5 border-1 bg-[#569bdf20] border-[#869bdf28] rounded-[50%] cursor-pointer"><img src={Instagram} alt="Instagram" /></span>
                    <span className="flex items-center justify-center w-11.5 h-11.5 border-1 bg-[#569bdf20] border-[#869bdf28] rounded-[50%] cursor-pointer"><img src={Twitter} alt="Twitter" /></span>
                    <span className="flex items-center justify-center w-11.5 h-11.5 border-1 bg-[#569bdf20] border-[#869bdf28] rounded-[50%] cursor-pointer"><img src={LinkedIn} alt="LinkedIn" /></span>
                    <span className="flex items-center justify-center w-11.5 h-11.5 border-1 bg-[#569bdf20] border-[#869bdf28] rounded-[50%] cursor-pointer"><img src={Youtube} alt="Youtube" /></span>
                </div>
            </div>
            <div className="flex flex-col gap-8 justify-between flex-4 lg:flex-row lg:gap-0">
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">Marketplace</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-light cursor-pointer">NFTs</li>
                        <li className="font-light cursor-pointer">Art</li>
                        <li className="font-light cursor-pointer">Collections</li>
                        <li className="font-light cursor-pointer">Visual World</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">Info</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-light cursor-pointer">Activity</li>
                        <li className="font-light cursor-pointer">Stats</li>
                        <li className="font-light cursor-pointer">Rankings</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">Company</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-light cursor-pointer">About</li>
                        <li className="font-light cursor-pointer">Support</li>
                        <li className="font-light cursor-pointer">Features</li>
                        <li className="font-light cursor-pointer">Top Creators</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">Resources</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-light cursor-pointer">Info</li>
                        <li className="font-light cursor-pointer">Affiliates</li>
                        <li className="font-light cursor-pointer">Associated</li>
                        <li className="font-light cursor-pointer">Blog</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="border-[#535488b3]"/>
        <p className="text-sm text-[var(--gray-color)] text-center font-light leading-[183%]  section__margin">© 2022 Copyright TemplatesJungle. All rights reserved</p>
    </div>
  )
}

export default Footer