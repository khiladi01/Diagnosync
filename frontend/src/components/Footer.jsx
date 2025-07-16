import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <div className="w-full bg-gradient-to-r from-slate-950 via-purple-900 to-slate-950 flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-12 py-6 gap-6 select-none">

        {/* Site Info */}
        <div className="w-full md:w-[300px]">
          <h3 className="text-white text-2xl font-medium">Diagnosync</h3>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 mt-[5px]">
            DiagnoSync is a modern web-based medical portal designed to streamline patient interaction with healthcare services through a seamless digital experience.
          </p>
        </div>

        {/* Links */}
        <div className="w-full md:w-[150px]">
          <h3 className="text-white text-2xl font-medium">Links</h3>
          <div className="grid mt-[5px]">
            <Link className="mt-[2px] text-md font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 hover:text-cyan-400 transition-all ease-in-out duration-200" to="/">⇛ Home</Link>
            <Link className="mt-[2px] text-md font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 hover:text-cyan-400 transition-all ease-in-out duration-200" to="/patient">⇛ Patient</Link>
            <Link className="mt-[2px] text-md font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 hover:text-cyan-400 transition-all ease-in-out duration-200" to="/medicine">⇛ Medicine</Link>
            <Link className="mt-[2px] text-md font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 hover:text-cyan-400 transition-all ease-in-out duration-200" to="/totalbill">⇛ Bill</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-auto">
          <h3 className="text-white text-2xl font-medium">Contact Us</h3>
          <div>
            <p><i className='mt-[10px] bx bx-map text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 text-lg mr-2'>
              <span className="pl-[5px]">Jaynagar, Madhubani, Bihar, 847226</span></i>
            </p>
          </div>
          <div>
            <p><i className='mt-[10px] bx bx-envelope text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 text-lg mr-2'>
              <span className="pl-[5px]">akshayraj3435@gmail.com</span></i>
            </p>
          </div>
          <div>
            <p><i className='mt-[10px] bx bx-phone text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 text-lg mr-2'>
              <span className="pl-[5px]">9142158588</span></i>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full h-auto py-4 flex justify-center items-center bg-gradient-to-r from-slate-950 via-purple-900 to-slate-950 select-none">
        <p className="text-center text-xs text-gray-400 px-4">
          © {new Date().getFullYear()} DiagnoSync. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
