const ContactInfo = ({icon, contact_means, contact_info}) => {
  return (
    <div className="flex flex-col flex-1 gap-4 items-center justify-center rounded-[10px] bg-[#16192a] border-2 border-[#2e3150] w-80 h-auto p-10 md:p-4 lg:p-8 lg:w-55 lg:text-[13px] xl:w-65 xl:text-sm">
        <h2 className="text-[var(--secondary-color)] text-7xl">{icon}</h2>
        <h2 className="text-lg font-bold">{contact_means}</h2>
        {
          contact_info.map((info, index) => {
            return (
              <p key={index} className="text-xs md:text-[10px]">{info}</p>
            )
          })
        }
    </div>
  )
}

export default ContactInfo