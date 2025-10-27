import { useEffect } from "react";

const CreateNFT = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex justify-center section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">Create Item</h1>
    </div>
  );
};

export default CreateNFT;
