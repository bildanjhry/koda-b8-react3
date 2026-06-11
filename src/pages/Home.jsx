import Navbar from "../components/Navbar"

export default function Home(){
    return(
        <div className="flex flex-col items-center w-full h-[100vh]">
            <Navbar/>
            <div className="flex pt-[8rem] items-center h-[100vh] w-full flex-col gap-24">
                 <p className="text-2xl text-white">Hello, <span className="text-slate-400">Good Afternoon</span></p>
                 <p className="text-[14rem] text-white font-bold pb-[5rem]">Welcome</p>
            </div>
        </div>
    )
}