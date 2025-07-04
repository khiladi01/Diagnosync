import { Link } from "react-router-dom";

function Nav() {
    return(
        <>
          <div className="h-[50px] w-full bg-[#1A1A2E] flex justify-between sticky top-0 shadow-sm shadow-gray-400">
            {/* adding site name */}
           <div className="w-[300px] h-[50px] flex justify-center items-center">
            <p className="text-[#00F6FF] text-2xl font-semibold">Diagno Sync</p>
           </div>
           {/* adding site links */}
            <div className="w-[400px] h-[50px] flex justify-between items-center">
              <Link className="text-gray-300 text-sm hover:text-[#A259FF] font-normal hover:underline underline-offset-8 decoration-[#A259FF] transition-all ease-in-out duration-200" to="/">Home</Link>
              <Link className="text-gray-300 text-sm hover:text-[#A259FF] font-normal hover:underline underline-offset-8 decoration-[#A259FF] transition-all ease-in-out duration-200" to="/patient">Patient</Link>
              <Link className="text-gray-300 text-sm hover:text-[#A259FF] font-normal hover:underline underline-offset-8 decoration-[#A259FF] transition-all ease-in-out duration-200" to="/medicine">Medicine</Link>
              <Link className="text-gray-300 text-sm hover:text-[#A259FF] font-normal hover:underline underline-offset-8 decoration-[#A259FF] transition-all ease-in-out duration-200" to="/totalbill">Bill</Link>
            </div>
            {/* adding login button */}
              <div className="w-[300px] h-[50px] flex justify-center items-center">
                <div className="w-[150px] h-[35px] border-[1px] border-cyan-400">
                    <Link className="h-full w-full flex justify-center items-center text-gray-300 hover:text-gray-400 transition-all ease-in-out duration-200" to="/">Login</Link>
                </div>
              </div>
          </div>
        </>
    )
}
export default Nav;