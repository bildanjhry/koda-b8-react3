import Navbar from "../components/Navbar"
export default function ContactUs(){
    return(
        <div className="flex flex-col items-center w-full h-[100vh]">
            <Navbar/>
            <div className="w-full h-[100vh] flex flex-col items-center">
                  <p className="text-[12rem] text-white pt-[4rem] font-bold">Contact Us</p>
            </div>
        </div>
    )
}