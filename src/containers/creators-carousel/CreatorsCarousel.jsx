import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { CreatorCard } from "../../components";
import { IoMdArrowDropdown } from "react-icons/io";
import { useCarousel } from "../../hooks/useCarousel";

const CreatorsCarousel = ({ title, items }) => {
  const [currentPage, currentSlide, slidePageNumbers, prevPage, nextPage] =
    useCarousel(items, 12);

  return (
    <div className="flex flex-col gap-4 items-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-8">{title}</h1>
      <div className="flex justify-between w-full mt-12">
        <span>Showing all 9 results</span>
        <span className="flex items-center gap-2">
          Sort by latest <IoMdArrowDropdown />{" "}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-16 w-full lg:flex-row">
        {currentSlide.map((item) => {
          return (
            <CreatorCard
              key={item.id}
              id={item.id}
              creator_name={item.creator_name}
              creator_pfp={item.creator_pfp}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-8 mt-6">
        <MdOutlineChevronLeft
          size={36}
          onClick={currentPage != 1 ? prevPage : null}
          className={`${
            currentPage == 1 ? "text-transparent" : "cursor-pointer"
          }`}
        />
        <div className="flex gap-6 font-bold">
          {slidePageNumbers.map((no, index) => {
            return (
              <span
                key={index}
                className={currentPage == no ? "gradient-text" : null}
              >
                {no}
              </span>
            );
          })}
        </div>
        <MdOutlineChevronRight
          size={36}
          onClick={currentPage != slidePageNumbers.length ? nextPage : null}
          className={`${
            currentPage == slidePageNumbers.length
              ? "text-transparent"
              : "cursor-pointer"
          }`}
        />
      </div>
    </div>
  );
};

export default CreatorsCarousel;
