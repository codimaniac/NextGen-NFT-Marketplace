import { ContactInfo } from "../../components"
import { IoMdCall, IoMdMailOpen, IoMdPin } from "react-icons/io"

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 mt-12 w-full section__margin md:flex-row md:flex-wrap md:gap-4 lg:gap-4">
        <ContactInfo icon={<IoMdCall />} contact_means="Phone Number" contact_info={["+123 123 123 123", "+123 123 123 123"]}/>
        <ContactInfo icon={<IoMdMailOpen />} contact_means="Email Address" contact_info={["demo@nextgen.com", "demo@nextgen.com"]}/>
        <ContactInfo icon={<IoMdPin />} contact_means="Our Location" contact_info={["101 Brookside Ln, Brighton, USA", "Perimeter Pkwy NW, Huntsville, USA"]}/>
    </div>
  )
}

export default Contacts