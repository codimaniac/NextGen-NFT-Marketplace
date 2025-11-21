import { useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "../button/Button";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ toggle }) => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <li>
        <Link
          to="/"
          className={`relative no-underline hover:text-[var(--accent-color)] ${
            pathName == "/"
              ? "after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:rounded-[50%] after:bg-[#2e3150]"
              : null
          }`}
          onClick={toggle}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/marketplace"
          className={`relative no-underline hover:text-[var(--accent-color)] ${
            pathName == "/marketplace"
              ? "after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:rounded-[50%] after:bg-[#2e3150]"
              : null
          }`}
          onClick={toggle}
        >
          Marketplace
        </Link>
      </li>
      <li>
        <Link
          to="/artist"
          className={`relative no-underline hover:text-[var(--accent-color)] ${
            pathName == "/artist"
              ? "after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:rounded-[50%] after:bg-[#2e3150]"
              : null
          }`}
          onClick={toggle}
        >
          Artist
        </Link>
      </li>
      <li>
        <Link
          to="/community"
          className={`relative no-underline hover:text-[var(--accent-color)] ${
            pathName == "/community"
              ? "after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:rounded-[50%] after:bg-[#2e3150]"
              : null
          }`}
          onClick={toggle}
        >
          Community
        </Link>
      </li>
    </>
  );
};

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("Clicked!");
  };

  return (
    <nav className="flex flex-row items-center justify-between text-xs gap-4 font-light md:text-xs xl:text-sm section__margin">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="w-28 h-auto md:w-[7rem] xl:w-[10rem]"
        />
      </Link>
      <ul className="hidden flex-row sm:hidden md:gap-8 lg:flex xl:gap-14">
        <Menu />
      </ul>
      <div className="hidden flex-row gap-4 lg:flex">
        <Button className="gradient-lin-bg">
          <Link to="/login" className="block w-full h-full py-[8px] px-[24px]">
            Log in
          </Link>
        </Button>
        <button className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer">
          <div className="bg-[var(--primary-color)] w-full h-full">
            <Link
              to="/signup"
              className="block w-full h-full py-[8px] px-[24px] md:py-[4px] md:px-[12px]"
            >
              Sign up
            </Link>
          </div>
        </button>
      </div>
      <div className="text-2xl lg:hidden" onClick={toggleNav}>
        {isNavOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
      </div>
      {isNavOpen && (
        <ul className="absolute top-15.5 right-0 z-1000 flex flex-col gap-10 w-full p-4 pl-[6.5vw] pr-[6.5vw] lg:hidden scale-up-center bg-[var(--primary-color)]">
          <Menu toggle={toggleNav} />
          <div className="flex flex-row gap-4">
            <Button className="gradient-lin-bg">
              <Link
                to="/login"
                onClick={toggleNav}
                className="block w-full h-full py-[8px] px-[24px]"
              >
                Log in
              </Link>
            </Button>
            <button className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer">
              <div className="bg-[var(--primary-color)] w-full h-full">
                <Link
                  to="/signup"
                  onClick={toggleNav}
                  className="block w-full h-full py-[8px] px-[24px] md:py-[4px] md:px-[12px]"
                >
                  Sign up
                </Link>
              </div>
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
