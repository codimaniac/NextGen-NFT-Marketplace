import { FaFacebook, FaGoogle } from "react-icons/fa6"
import { Button } from '../components'

const Signup = () => {
  return (
    <div className="flex justify-center section__margin  text-[#848484]">
        <div className="items-center w-100 lg:w-120">
            <h1 className="text-center text-2xl font-extrabold leading-[121%] text-[var(--light-color)]">Sign-Up</h1>
            <p className="text-sm text-left font-light w-full mt-10">Sign-Up With Social</p>
            <hr className="border-[#535488b3] mt-4"/>
            <div className="flex items-center gap-4 mt-4 text-[var(--light-color)]">
                <button className="flex items-center justify-center flex-1 border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer rounded-4xl"><div className="flex items-center justify-center bg-[var(--primary-color)] w-full h-full py-[8px] px-[24px] md:py-3 md:px-[12px] rounded-4xl"><span className="flex items-center gap-2"><FaGoogle size={24}/> Google</span></div></button>
                <button className="flex items-center justify-center flex-1 border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer rounded-4xl"><div className="flex items-center justify-center bg-[var(--primary-color)] w-full h-full py-[8px] px-[24px] md:py-3 md:px-[12px] rounded-4xl"><span className="flex items-center gap-2"><FaFacebook size={24}/> Facebook</span></div></button>
            </div>
            <p className="text-sm text-left font-light w-full mt-10">Or Sign-Up With Email</p>
            <hr className="border-[#535488b3] mt-4"/>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" name="fullname" id="fullname" placeholder="Your full name" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-4 py-2 w-full text-xs"/>
              <input type="email" name="email" id="email" placeholder="Your email address" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-4 py-2 w-full text-xs"/>
              <input type="password" name="password" id="password" placeholder="Type your password" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-4 py-2 w-full text-xs"/>
              <input type="password" name="confirm__password" id="confirm__password" placeholder="Retype your password" className=" bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] px-4 py-2 w-full text-xs"/>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[10px]">
                  <input type="checkbox" name="remember__me" id="remember__me" className="bg-transparent"/>
                  Remember me  
                </span>
                <span className="text-[10px]">Lost Your Password?</span>
              </div>
            </form>
            <Button className="gradient-lin-bg w-full mt-4 text-[var(--light-color)] font-normal">Sign Up</Button>
        </div>
    </div>
  )
}

export default Signup