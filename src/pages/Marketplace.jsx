import { NFTsCarousel } from "../containers";
import { useGetData } from "../hooks/useFetch";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useResolvedPath,
  useSearchParams,
} from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { Button } from "../components";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const Marketplace = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname + location.search;
  const [nfts, isLoading, isError] = useGetData("http://localhost:5000/NFTs");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("search")?.toLowerCase();
  const collectionFilter = searchParams.get("collection");
  const filteredNFTs = nfts.filter((item) => {
    const searchMatch = searchFilter
      ? item?.name.toLowerCase().includes(searchFilter)
      : true;
    const collectionMatch = collectionFilter
      ? item?.collections.includes(collectionFilter)
      : true;

    return searchMatch && collectionMatch;
  });

  const handleFilterChange = (filterName, value) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value) {
      newSearchParams.set(filterName, value);
    } else {
      newSearchParams.delete(filterName);
    }

    setSearchParams(newSearchParams);
  };

  const removeQueryParams = (path, paramToRemove) => {
    const urlObj = new URL(`http://localhost:5173${path}`);

    const params = urlObj.searchParams;

    params.delete(paramToRemove);

    return urlObj.toString();
  };

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
          <Link to="/" className="block w-full h-full py-[8px] px-[24px]">Go Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">
        Explore NFTs
      </h1>
      <div className="flex justify-between mt-2 px-2 bg-[#16192a] border-2 border-[#2e3150] w-80 rounded-full text-xs md:w-90 lg:w-100">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search your items here..."
          className="w-full outline-0 p-4"
          value={searchFilter || ""}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
        <span className="flex items-center gap-2 px-4">
          <IoMdSearch size={28} />{" "}
        </span>
      </div>
      <ul className="hidden flex-row text-[var(--light-purple)] text-sm mt-2 font-bold sm:gap-8 sm:flex xl:gap-14">
        <li>
          <Link
            to={
              !path.includes("collection=")
                ? path
                : removeQueryParams(path, "collection")
            }
            className={`${
              !path.includes("collection=") ? "text-[var(--light-color)]" : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            All
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange("collection", "Wall art")}
            className={`${
              path.includes(`collection=Wall+art`)
                ? "text-[var(--light-color)]"
                : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            Wall Art
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange("collection", "Game")}
            className={`${
              path.includes(`collection=Game`)
                ? "text-[var(--light-color)]"
                : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            Game
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange("collection", "Character")}
            className={`${
              path.includes(`collection=Character`)
                ? "text-[var(--light-color)]"
                : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            Character
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange("collection", "Art")}
            className={`${
              path.includes(`collection=Art`) ? "text-[var(--light-color)]" : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            Art
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange("collection", "Painting")}
            className={`${
              path.includes(`collection=Painting`)
                ? "text-[var(--light-color)]"
                : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            Painting
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange("collection", "Others")}
            className={`${
              path.includes(`collection=Others`)
                ? "text-[var(--light-color)]"
                : ""
            } no-underline hover:text-[var(--accent-color)]`}
          >
            Others
          </button>
        </li>
      </ul>
      <div className="relative flex justify-center w-full sm:hidden">
        <div className="flex items-center justify-between gap-15 w-4/5">
          <span>Sort by collections</span>
          <span
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`${isNavOpen ? "rotate-90" : "rotate-0"}`}
          >
            <BiChevronRight size={28} />
          </span>
        </div>
        {isNavOpen && (
          <ul className="absolute top-10 right-1/10 z-1000 flex flex-col text-[var(--light-purple)] text-sm px-8 py-4 w-4/5 rounded-[10px] font-bold gap-8 bg-[#16192a] border-1 border-[#2e3150] scale-up-center">
            <li>
              <Link
                to={
                  !path.includes("collection=")
                    ? path
                    : removeQueryParams(path, "collection")
                }
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={`${
                  !path.includes("collection=")
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                All
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  handleFilterChange("collection", "Wall art");
                }}
                className={`${
                  path.includes(`collection=Wall+art`)
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                Wall Art
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  handleFilterChange("collection", "Game");
                }}
                className={`${
                  path.includes(`collection=Game`)
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                Game
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  handleFilterChange("collection", "Character");
                }}
                className={`${
                  path.includes(`collection=Character`)
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                Character
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  handleFilterChange("collection", "Art");
                }}
                className={`${
                  path.includes(`collection=Art`)
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                Art
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  handleFilterChange("collection", "Painting");
                }}
                className={`${
                  path.includes(`collection=Painting`)
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                Painting
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  handleFilterChange("collection", "Others");
                }}
                className={`${
                  path.includes(`collection=Others`)
                    ? "text-[var(--light-color)]"
                    : ""
                } no-underline hover:text-[var(--accent-color)]`}
              >
                Others
              </button>
            </li>
          </ul>
        )}
      </div>
      <NFTsCarousel items={filteredNFTs} itemsPerSlide={8} />
    </div>
  );
};

export default Marketplace;
