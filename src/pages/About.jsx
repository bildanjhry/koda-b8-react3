import Navbar from "../components/Navbar"

export default function About () {
    return (
        <div className="flex flex-col items-center w-full h-[100vh]">
        <Navbar/>
        <div className="flex justify-center items-center w-full flex-col h-[100vh]">
            <h1 className="text-4xl">Hello</h1>
            <p>You are at the about page.</p>
        </div>
    </div>
    )
}