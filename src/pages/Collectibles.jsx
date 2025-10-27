import { Link } from "react-router-dom";
import { Button } from "../components";
import { CollectionsCarousel } from "../containers";
import { useGetData } from "../hooks/useFetch";
import { useEffect } from "react";

const Collectibles = () => {
  const [collections, isLoading, isError] = useGetData(
    "https://nextgen-nft-marketplace.onrender.com/Collections"
  );
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center !mt-20 section__margin">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center rounded-[10px] bg-[#16192a] border-2 border-[#2e3150] h-auto p-12 section__margin">
        <p className="text-2xl lg:text-4xl">{isError}</p>
        <p className="text-[var(--lighter-color)] text-[10px] text-center font-light leading-[183%]">
          Server not accessible. Please try again later.
        </p>
        <Button className="gradient-lin-bg">
          <Link to="/" className="block w-full h-full py-[8px] px-[24px]">
            Go Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  return <CollectionsCarousel title="Our Collections" items={collections} />;
};

export default Collectibles;
