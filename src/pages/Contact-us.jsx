import Navbar from "../components/Navbar"
export default function ContactUs(){

    function handleSubmit(e){
        e.preventDefault()
        try{
            const data = new FormData(e.target)
            const formatData = Object.fromEntries(data.entries())
            const dataContact = []
            const contactMessage = {}

            if(!formatData) throw new Error("Data kosong")
            for (const props in formatData){
                if(!(formatData[props])){
                    throw new Error("Data Kosong")
                }
                contactMessage[props] = formatData[props]
            }
            console.log(contactMessage)
            dataContact.push(contactMessage)
            window.localStorage.setItem("message", JSON.stringify(dataContact))
        } catch(err){
            alert(err.message)
        }
    }

    return(
        <div className="flex flex-col items-center w-full h-[100vh]">
            <Navbar/>
            <div className="w-full h-[100vh] flex flex-col gap-24 items-center">
                  <p className="text-[12rem] text-white pt-[4rem] font-bold">Contact Us</p>
                  <form action="" 
                  onSubmit={(e) => {handleSubmit(e)}}
                  className="flex flex-col gap-4 w-[50%] mt-3">
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
                        className="bg-white w-24 h-10 text-slate-900 font-medium text-sm cursor-pointer">
                            SUBMIT
                        </button>
                    </div>
                  </form>
            </div>
        </div>
    )
}