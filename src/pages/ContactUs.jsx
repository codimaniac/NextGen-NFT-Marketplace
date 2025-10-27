import { Contacts } from "../containers"
import ContactImg from "../assets/contact-form-image.png"
import { Button } from "../components"
import { Link } from "react-router-dom"

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-4 items-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">Contact Us</h1>
      <Contacts />
      <div className="flex gap-4 w-full my-20">
        <img src={ContactImg} alt="Contact Image" className="hidden flex-1 rounded-[35px] lg:flex"/>
        <form className="flex flex-1 flex-col gap-4 mt-4">
          <h2 className="font-bold">Contact Us From the Form Below</h2>
          <p className="text-sm text-[var(--lighter-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor.</p>
          <input type="text" name="fullname" id="fullname" placeholder="Your Fullname" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-6 py-4 w-full text-xs"/>
          <input type="email" name="email" id="email" placeholder="Your Email Address" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-6 py-4 w-full text-xs"/>
          <input type="text" name="subject" id="subject" placeholder="Your Subject" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-6 py-4 w-full text-xs"/>
          <input type="text" name="message" id="message" placeholder="Your Message Here" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-6 py-4 w-full text-xs"/>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[10px]">
              <input type="checkbox" name="remember__me" id="remember__me" className="bg-transparent"/>
              Allow all terms & condictions  
            </span>
          </div>
          <Button className="gradient-lin-bg w-fit mt-4 text-[var(--light-color)] font-normal"><Link to='/message-us' className="block w-full h-full py-[8px] px-[24px]">Send Message</Link></Button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs