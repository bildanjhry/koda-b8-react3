import { Link } from "react-router"

export default function Navbar(){
    return(
        <div className="w-full h-[4rem] flex justify-center">
            <ul className="w-[90%] flex justify-between items-center h-[100%]">
                <li className="flex gap-6 text-sm w-[25%]">
                    <Link to={"/"}>
                        <div className="">Home</div>
                    </Link>
                    <Link to={"/about"}>
                        <div>About</div>
                    </Link>
                    <Link to={"/contact-us"}>
                        <div>Contact Us</div>
                    </Link>
                </li>
                <li className="w-[50%] flex justify-center">
                    <p className="text-lg font-bold text-white">orbytex.io</p>
                </li>
                <li className="flex gap-6 justify-end text-sm w-[25%] ">
                    <div>Log In</div>
                    <div>Sign Up</div>
                </li>
            </ul>    
        </div>
    )
}