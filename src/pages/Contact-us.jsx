import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

export default function ContactUs(){
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     function getUserMessage(){
        const userMessage = JSON.parse(localStorage.getItem("message"))
        if(userMessage) {
            setMessage(userMessage)
            setLoading(false)
        }
     }
    getUserMessage()

  },[setMessage, setLoading])

    function handleSubmit(e){
      e.preventDefault()
      try{
        const data = new FormData(e.target)
        const formatData = Object.fromEntries(data.entries())
        let dataContact = []
        const contactMessage = {}

        if(!formatData) throw new Error("Data kosong")
        for (const props in formatData){
            if(!(formatData[props])){
                throw new Error("Data Kosong")
            }
            contactMessage[props] = formatData[props]
        }
        const userMessage = JSON.parse(localStorage.getItem("message"))

        if(userMessage) dataContact = [...userMessage]
        dataContact.push(contactMessage)
        setMessage(dataContact)
        setLoading(false)
        localStorage.setItem("message", JSON.stringify(dataContact))
      } catch(err){
         alert(err.message)
      }
    }

    return(
        <div className="flex flex-col items-center w-full h-fit">
            <Navbar/>
            <div className="w-full h-[100vh] flex flex-col items-center ">
                  <p className="text-[12rem] text-white pt-[4rem] font-bold">Contact Us</p>
                  <form action="" 
                  onSubmit={(e) => {handleSubmit(e)}}
                  className="flex flex-col gap-4 w-[50%] mt-24">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input 
                        className="border-b pl-4 h-10 focus:outline-none"
                        type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col focus:outline-none">
                        <label htmlFor="email">Email</label>
                        <input 
                        className="border-b pl-4 h-10 focus:outline-none"
                        type="email" name="email" id="email" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="message">Message</label>
                        <textarea
                        rows={5}
                        className="border-b focus:outline-none pt-2 pl-4"
                        name="message" id="email"></textarea>
                    </div>
                    <div className="w-full justify-end">
                        <button type="submit" 
                        className="bg-[#6FCF97] w-24 h-10 text-slate-900 font-medium text-sm
                        active:bg-[#6FCF97] cursor-pointer hover:bg-[#2FA084]">
                            SUBMIT
                        </button>
                    </div>
                  </form>
                  {
                     loading ? <></> :
                     <MessageList message={message}/>
                  }
            </div>
        </div>
    )
}

function MessageList({message}){
    return(
        <div className="w-[50%] h-fit pb-10 mt-6">
            {message?.map((item, index) => (
                <div
                 key={index}
                 className="mt-12">
                    <h4 className="text-2xl text-white">{item?.name}</h4>
                    <p className="text-xs text-[#6FCF97]">{item?.email}</p>
                    <p className="pt-5">{item?.message}</p>
                </div>
            ))}
        </div>
    )
}