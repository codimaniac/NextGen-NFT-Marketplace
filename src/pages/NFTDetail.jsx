import {
  Link,
  Route,
  Routes,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import { useGetData } from "../hooks/useFetch";
import { CollectNFTs } from "../containers";
import { IoMdShare } from "react-icons/io";
import { Button } from "../components";
import { useEffect } from "react";
import { Review } from "../components";
import { capitalizeWords } from "../utils/capitalizeWords";

const ProductDescription = ({ full_desc, details }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#16192a] border-1 border-[#2e3150] p-8 my-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
      <div className="text-xl font-extrabold">Product Description</div>
      <div className="text-[12px]">{full_desc}</div>
      <div className="text-xl font-extrabold">Product Details</div>
      {
        Object.entries(details).map(([key, value], index) => (
          <div key={index} className="flex justify-between border-b border-[#2e3150] pb-2 mb-2">
            <span className="font-medium">{capitalizeWords(key.replace(/_/g, ' '))}:</span>
            <span>{value}</span>
          </div>
        ))
      }
    </div>
  );
};

const AdditionalInfo = ({ properties }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#16192a] border-1 border-[#2e3150] p-8 my-8 w-full rounded-[10px] font-light text-sm leading-[183%] text-justify">
      <div className="text-xl font-extrabold">Properties</div>
      {
        properties.map((property, index) => (
          <div key={index} className="flex justify-between border-b border-[#2e3150] pb-2 mb-2">
            <span>{property.trait}</span>
            <span>{property.value}</span>
          </div>
        ))
      }
    </div>
  );
};

const NFTDetail = () => {
  const { id } = useParams();
  const basePath = `/nft/${id}`;
  const path = useResolvedPath("").pathname;
  const db_url = import.meta.env.VITE_DB_URL
  const [nft, isLoading, isError] = useGetData(`${db_url}/NFTs/${id}`)
  
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

  return (
    <>
      <div className="flex flex-col gap-8 items-center section__margin">
        <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">
          Item Details
        </h1>
        <div className="flex flex-col w-full gap-12 lg:flex-row">
          <div className=" flex-1 h-158 lg:w-1/2 overflow-hidden">
            <img
              src={nft.nft}
              alt={nft.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold lg:text-3xl">
                {nft.name}
              </h2>
              <div className="bg-[#16192a] border-1 border-[#2e3150] p-2 rounded-full">
                <IoMdShare size={18} />
              </div>
            </div>
            <div className="flex gap-4 text-sm mt-2">
              <span className="font-light">Current Price:</span>
              <span className="font-extrabold">{nft.price} ETH</span>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <img
                src={nft.creator_pfp}
                alt={nft.creator}
                className="rounded-full w-10"
              />
              <span className="text-sm">@{nft.creator}</span>
            </div>
            <div className="flex flex-col gap-1 bg-[#16192a] border-1 border-[#2e3150] p-8 mt-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
              <div>{nft.short_desc}</div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src={nft.owner_pfp}
                  alt={nft.owner}
                  className="rounded-full w-10"
                />
                <div className="flex flex-col">
                  <span className="text-xs">@{nft.owner}</span>
                  <span className="text-xs">Owner</span>
                </div>
              </div>
              <div>
                <span className="font-medium">Collection: </span>
                {nft.collections?.join(", ")}
              </div>
              <div>
                <span className="font-medium">Token ID: </span>
                {nft.id}
              </div>
            </div>
            <Button className="gradient-lin-bg w-3/5 rounded-[10px] font-light mt-8">
              <Link
                to="/buy"
                className="block w-full h-full py-[8px] px-[24px]"
              >
                Buy It Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 section__margin">
        <ul className="flex flex-row justify-between w-full font-bold text-[var(--light-purple)] text-sm mt-2 md:justify-center md:gap-8 xl:gap-14">
          <li>
            <Link
              to={basePath}
              className={`${
                path == `/nft/${id}` ? "text-[var(--light-color)]" : ""
              } no-underline hover:text-[var(--accent-color)]`}
            >
              Details
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/additional-info`}
              className={`${
                path == `/nft/${id}/additional-info`
                  ? "text-[var(--light-color)]"
                  : ""
              } no-underline hover:text-[var(--accent-color)]`}
            >
              Additional Information
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/review`}
              className={`${
                path == `/nft/${id}/review` ? "text-[var(--light-color)]" : ""
              } no-underline hover:text-[var(--accent-color)]`}
            >
              Review ({nft.review?.length})
            </Link>
          </li>
        </ul>
        <Routes>
          <Route
            index
            element={<ProductDescription full_desc={nft.full_desc} details={nft.details} />}
          />
          <Route
            path="additional-info"
            element={<AdditionalInfo properties={nft.properties} />}
          />
          <Route path="review" element={<Review review={nft.review} />} />
        </Routes>
      </div>
      <CollectNFTs title="Related NFTs" />
    </>
  );
};

export default NFTDetail;
