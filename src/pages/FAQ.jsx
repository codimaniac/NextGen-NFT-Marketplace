import { useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

const FAQCard = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleFAQ = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex flex-col items-center justify-center bg-[#16192a] border-2 border-[#2e3150] rounded-[10px] p-4">
      <div className="flex items-center justify-between font-bold w-full" onClick={toggleFAQ}><span>{question}</span>{isOpen ? <IoMdArrowDropup size={36} /> : <IoMdArrowDropdown size={36}/>}</div>
      {isOpen && <p className="text-xs font-light leading-[183%]">{answer}</p>}
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      "question": "Why To Buy NFTs From NextGen?",
      "answer": "Obcaecati mollitia, molestias tenetur hic commodi quibusdam fugit ipsum minima dolorem delectus! Quae, nesciunt similique? Ipsa atque animi ipsum, magnam at harum necessitatibus, praesentium beatae, quam neque excepturi asperiores voluptate veritatis possimus non repellat sed."
    },
    {
      "question": "How To Find My Transaction History?",
      "answer": "Obcaecati mollitia, molestias tenetur hic commodi quibusdam fugit ipsum minima dolorem delectus! Quae, nesciunt similique? Ipsa atque animi ipsum, magnam at harum necessitatibus, praesentium beatae, quam neque excepturi asperiores voluptate veritatis possimus non repellat sed."
    },
    {
      "question": "Can I Get Refund?",
      "answer": "Obcaecati mollitia, molestias tenetur hic commodi quibusdam fugit ipsum minima dolorem delectus! Quae, nesciunt similique? Ipsa atque animi ipsum, magnam at harum necessitatibus, praesentium beatae, quam neque excepturi asperiores voluptate veritatis possimus non repellat sed."
    },
    {
      "question": "Do We Get Commissions For Recommend?",
      "answer": "Obcaecati mollitia, molestias tenetur hic commodi quibusdam fugit ipsum minima dolorem delectus! Quae, nesciunt similique? Ipsa atque animi ipsum, magnam at harum necessitatibus, praesentium beatae, quam neque excepturi asperiores voluptate veritatis possimus non repellat sed."
    },
  ]

  return (
    <div className="flex justify-center section__margin">
      <div className="flex flex-col items-center gap-4 md:w-4/5 lg:w-3/5 xl:w-1/2">
        <h1 className="text-3xl font-extrabold lg:text-4xl mt-20">FAQs</h1>
        <p className="text-xs text-center font-light leading-[183%] mt-6">Officiis architecto dolore voluptas enim numquam, dolorem recusandae, quam doloremque quibusdam illum nostrum atque dicta exercitationem quia dignissimos ratione esse non.</p>
        <div className="flex flex-col gap-4 w-full">
          {
            faqs.map((faq, index) => {
              return (
                <FAQCard key={index} question={faq.question} answer={faq.answer} />
              )
            })
          }
        </div>
      </div>      
    </div>
  )
}

export default FAQ