const CollectionCard = ({collection_name, collection_image}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#16192a] border-2 border-[#2e3150] rounded-[220px] h-140 px-3 lg:text-sm lg:h-85 lg:px-4 xl:h-100">
        <img src={collection_image} alt={collection_name} className="rounded-[50%] translate-y-[-60px] lg:translate-y-[-30px] xl:translate-y-[-32px]"/>
        <span>{collection_name}</span>
        <span className="text-sm text-[var(--accent-color)] cursor-pointer">Veiw Collections</span>
    </div>
  )
}

export default CollectionCard