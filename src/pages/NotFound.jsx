import { Link } from "react-router-dom"
import { Button } from "../components"

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-[10px] bg-[#16192a] border-2 border-[#2e3150] h-auto p-12 section__margin">
        <h2 className="text-5xl font-black lg:text-7xl gradient-text">404</h2>
        <p className="text-2xl lg:text-4xl">Page Not Found!</p>
        <p className="text-[var(--lighter-color)] text-[10px] text-center font-light leading-[183%]">
            Sorry! currentPage that you are looking for is not available.
        </p>
        <Button className="gradient-lin-bg"><Link to="/">Go Back to Home</Link></Button>
    </div>
  )
}

export default NotFound