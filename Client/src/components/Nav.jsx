import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';


function Nav() {
    return(
        <>
          <div className="h-[70px] w-full bg-gradient-to-r from-slate-950 via-purple-700 to-slate-950 flex justify-between shadow-sm shadow-white sticky top-0 select-none">
            {/* adding site name */}
           <div className="w-[300px] h-[70px] flex justify-center items-center">
            <p className="w-full h-[40px] flex justify-center items-center rounded-full bg-gradient-to-r from bg-slate-950 to-pink-700 text-white text-2xl font-normal" title="Site Name">ＤｉａｇｎｏＳｙｎｃ</p>
           </div>
           {/* adding site links */}
            <div className="w-[450px] h-[70px] flex justify-between items-center">
              <Link className="w-[100px] flex justify-center items-center text-cyan-300 text-sm hover:text-cyan-400 font-normal
              hover:rounded-full hover:shadow-lg hover:shadow-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff] transition-all ease-in-out duration-200" to="/">Home</Link>
              <Link className="w-[100px] flex justify-center items-center text-cyan-300 text-sm hover:text-cyan-400 font-normal 
              hover:rounded-full hover:shadow-lg hover:shadow-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff] transition-all ease-in-out duration-200" to="/patient">Patient</Link>
              <Link className=" w-[100px] flex justify-center items-center text-cyan-300 text-sm hover:text-cyan-400 font-normal 
              hover:rounded-full hover:shadow-lg hover:shadow-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff] transition-all ease-in-out duration-200" to="/medicine">Medicine</Link>
              <Link className="w-[100px] flex justify-center items-center text-cyan-300 text-sm hover:text-cyan-400 font-normal hover:rounded-full hover:shadow-lg hover:shadow-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff] transition-all ease-in-out duration-200" to="/totalbill">Bill</Link>
            </div>
            {/* adding login button */}
              <div className="w-[300px] h-[70px] flex justify-center items-center">
                <div className="w-[50px] h-full">
                    <Link className="h-full w-full flex justify-center items-center hover:text-gray-400 transition-all ease-in-out duration-200" to="/"><i className='bx bx-user text-lg hover:text-pink-400 cursor-pointer text-white transition-all ease-in-out duration-200' title="Profile"></i></Link>
                </div>
              </div>
          </div>
        </>
    )
}
export default Nav;