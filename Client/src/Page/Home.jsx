import React from "react"
import "../Style/Home.css"
import { Link } from "react-router-dom"
import 'boxicons/css/boxicons.min.css';

function Home() {

    return(
       <>
         <div id="herosec" className="w-full h-screen grid place-content-center select-none">
            <div id="herosectwo" className="h-[250px] w-[600px] grid place-content-center">
            <div className="h-[50px] w-full grid place-content-center"><p className="text-xl font-medium text-white uppercase tracking-wider">diagnosync medical care</p></div>
            <div className="h-[100px] w-full grid place-content-center"><p className="text-3xl font-semibold text-white tracking-widest">Your Care Starts Here</p></div>
            <div className="h-[100px] w-full grid place-content-center">
            <div className="h-[42px] w-[260px] bg-slate-900 rounded-full grid place-content-center">
            <Link className="h-full w-full text-lg text-white hover:scale-105 hover:text-gray-300 transition-all ease-in-out duration-200" to="/patient">Check Your Report</Link>
               </div>
            </div>
            </div>
          </div>
          {/* adding schedule */}
          <div id="herosec" className="w-full h-screen select-none">
            <div id="herosectwo" className="w-full h-[150px] flex justify-center items-center">
            <div id="scsecone" className="w-[460px] h-[100px] hover:scale-90 transition-all ease-in-out duration-200 gap-4 bg-transparent flex justify-center items-center text-white"><p><i class='bx bx-time text-3xl'></i>
            </p><div><p className="text-lg font-bold">Monday - Friday</p><span><p className="text-md">9am - 6pm</p></span></div></div>
            <div id="scsectwo" className="w-[460px] h-[100px] hover:scale-90 transition-all ease-in-out duration-200 gap-4 bg-transparent flex justify-center items-center text-white"><p><i class='bx bx-time text-3xl'></i>
            </p><div><p className="text-lg font-bold">Saturday</p><span><p className="text-md">9am - 3pm</p></span></div></div>
            <div id="scsecone" className="w-[460px] h-[100px] hover:scale-90 transition-all ease-in-out duration-200 gap-4 bg-transparent flex justify-center items-center text-white"><p><i class='bx bx-time text-3xl'></i>
            </p><div><p className="text-lg font-bold">Sunday</p><span><p className="text-md">12pm - 3pm</p></span></div></div>
            </div>
          </div>
       </>
    )
}
export default Home;