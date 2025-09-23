import NewsletterImg from '../../assets/newsletter-image.png'
import { Button } from '../../components'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center gap-4 section__margin !mt-16 lg:flex-row">
        <img src={NewsletterImg} alt="Newsletter Image" className="flex-1 w-[300px]"/>
        <div className="flex flex-col items-center gap-8 flex-1 w-full">
            <h2 className="text-3xl font-black lg:text-4xl">Subscribe And Get Latest News Update About NFTs.</h2>
            <p className="text-sm text-[var(--gray-color)] font-light leading-[183%]">In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.</p>
            <div className="flex items-center bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] p-2 w-full text-xs ">
                <input type="email" name="email" id="email" placeholder="Write your email here" autoComplete="email" className="flex-1 border-0 outline-0 p-2 rounded-l-[5px] focus:bg-[#5955721f]"/>
                <Button className="gradient-lin-bg">Subcribe</Button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter