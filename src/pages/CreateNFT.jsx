import { useEffect, useState } from "react";
import { Button, NFTsCard } from "../components";
import CreatorPFP from "/public/images/loura-chin-pfp.png";

const CreateNFT = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [collection, setCollection] = useState([]);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0]; // Get the first selected file
    if (selectedFile) {
      setFile(selectedFile);

      // get image url for preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Use a single onChange handler on the <select> to reliably get all selected values.
  const handleCollectionChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setCollection(values.filter((item) => item !== ""));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(collection);
  }, [collection]);

  return (
    <div className="flex flex-col items-center justify-center gap-12 section__margin">
      <h1 className="text-3xl font-extrabold lg:text-4xl mt-8">Create Item</h1>
      <div className="flex flex-col items-center w-full gap-28 text-xs lg:flex-row lg:items-start lg:gap-8">
        <div className="flex flex-col flex-1 gap-4">
          <div className="h3">Preview Item</div>
          <NFTsCard
            nft={preview}
            name={title}
            price={price}
            creator="Loura Chin"
            creator_pfp={CreatorPFP}
          />
        </div>
        <div className="flex flex-col flex-3 w-full">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Upload File</span>
              <div className="flex items-center justify-between bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] p-4">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <span className="font-medium text-[var(--light-purple)]">
                  {file?.name || "PNG, JPG, GIF, WEBP, MP3 or MP4. Max 200mb."}
                </span>
                <label
                  htmlFor="file"
                  className="border-2 border-transparent gradient-lin-bg bg-clip-border cursor-pointer"
                >
                  <div className="bg-[#16192a] w-full h-full py-2 px-12">
                    Upload File
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Item Name"
                className="flex items-center justify-between bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] py-4 px-6 font-normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Write description for your item"
                className="flex items-center justify-between bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] py-4 px-6 font-normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter price for your item (e.g 0.36ETH)"
                className="flex items-center justify-between bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] py-4 px-6 font-normal"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="size" className="font-semibold">
                  Size
                </label>
                <input
                  type="number"
                  name="size"
                  id="size"
                  placeholder='e.g. "size"'
                  className="flex items-center justify-between bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] py-4 px-6 font-normal"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="collection" className="font-semibold">
                  Collection
                </label>
                <select
                  multiple
                  size={1}
                  onChange={handleCollectionChange}
                  className="bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] py-4 px-6 font-normal"
                >
                  <option className="p-4 text-black" value="" disabled selected>
                    Select a collection
                  </option>
                  <option className="p-4 text-black" value="Wall Art">
                    Wall Art
                  </option>
                  <option className="p-4 text-black" value="Game">
                    Game
                  </option>
                  <option className="p-4 text-black" value="Character">
                    Character
                  </option>
                  <option className="p-4 text-black" value="Art">
                    Art
                  </option>
                  <option className="p-4 text-black" value="Painting">
                    Painting
                  </option>
                  <option className="p-4 text-black" value="Others">
                    Others
                  </option>
                </select>
              </div>
            </div>
            <Button className="block w-fit h-full py-[8px] px-[24px] gradient-lin-bg font-normal">
              Upload Your Item
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
