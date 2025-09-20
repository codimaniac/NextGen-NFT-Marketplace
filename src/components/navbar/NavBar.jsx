import { useState } from 'react'
import Logo from '../../assets/logo.png'
import Button from '../button/Button'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Menu = () => {
  return (
    <>
      <li><a href="#home" className="no-underline">Home</a></li>
      <li><a href="#marketplace" className="no-underline">Marketplace</a></li>
      <li><a href="#artist" className="no-underline">Artist</a></li>
      <li><a href="#community" className="no-underline">Community</a></li>
    </>
  )
}

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <nav className='flex flex-row items-center justify-between text-xs gap-4 md:text-xs xl:text-sm section__margin'>
        <img src={Logo} alt="Logo" className='w-28 h-auto md:w-[7rem] xl:w-[10rem]' />
        <ul className="hidden flex-row sm:hidden md:gap-8 lg:flex xl:gap-14">
            <Menu />
        </ul>
        <div className="hidden flex-row gap-4 lg:flex">
          <Button className="gradient-lin-bg">Log in</Button>
          <button className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer"><div className="bg-[var(--primary-color)] w-full h-full pt-[8px] pb-[8px] pl-[24px] pr-[24px] md:pt-[4px] md:pb-[4px] md:pl-[12px] md:pr-[12px]">Sign up</div></button>
        </div>
        <div className="text-2xl lg:hidden" onClick={() => setToggleNav(!toggleNav)}>
          {toggleNav ? <RiCloseLine size={30}/> : <RiMenu3Line size={30}/>}
        </div>
        { toggleNav && 
          <ul className="absolute top-15.5 right-0 flex flex-col gap-10 w-full p-4 pl-[6.5vw] pr-[6.5vw] lg:hidden scale-up-center bg-[var(--primary-color)]">
            <Menu />
          </ul>
        }
    </nav>
  )
}

export default NavBar