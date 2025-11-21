import { MdStar, MdVerified } from "react-icons/md";
import Button from "./button/Button";

const Review = ({ review }) => {
  if (review?.length === 0) {
    return (
      <div className="flex flex-col gap-4 bg-[#16192a] border-1 border-[#2e3150] p-8 my-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
        <div className="text-xl font-extrabold">Review</div>
        <div>No reviews yet. Be the first to review this product!</div>
      </div>
    );
  }
  return (
      <div className="flex flex-col gap-4 w-full border-[#2e3150] my-8 rounded-[10px] font-light text-sm leading-[183%] text-justify">
            
            {review?.map((rev, index) => {
              return (
                <div key={index} className="flex flex-col gap-2 p-8 bg-[#16192a] border-1 border-[#2e3150]">
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
                      alt={rev.user}
                      className="rounded-[5px] w-10"
                    />
                    <div className="flex flex-col gap-2 justify-between leading-tight">
                      <span className="inline-flex items-center gap-2 text-xs">@{rev.user} <MdVerified color="#1DA1F2" size={14} /></span>
                      <span className="text-[10px] text-[var(--lighter-color)]">Posted on {rev?.timestamp.split('T')[0]} {rev?.timestamp.split('T')[1].split(':')[0]}:{rev?.timestamp.split('T')[1].split(':')[1]} </span>
                    </div>
                    <div className="flex self-start items-center ml-auto gap-2">
                      <MdStar color="#FFD700" size={14} />
                      <span>{rev?.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-xs mb-4">{rev.comment}</div>
                  <div className="text-[10px] mb-2 text-[var(--lighter-color)]">{rev.likes} people found this useful</div>
                  <div className="flex item-center justify-between text-xs">
                    <div className="span">Was this review helpful?</div>
                    <div className="flex items-center gap-2">
                      <Button className="px-2 py-1 bg-[#2e3150] rounded-[5px] hover:scale-95">Yes</Button>
                      <Button className="px-2 py-1 bg-[#2e3150] rounded-[5px] hover:scale-95">No</Button>
                    </div>
                  </div>
                </div>
              )
            })}
      </div>
  );
};

export default Review