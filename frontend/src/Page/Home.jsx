import React from "react";
import "../Style/Home.css";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import dimgone from "../assets/Home/Medical-img-1.jpg";
import dimgtwo from "../assets/Home/Medical-img-2.jpg";
import dimgthree from "../assets/Home/Medical-img-3.webp";

function Home() {
  return (
    <>
      <div id="herosec" className="w-full h-screen grid place-content-center select-none px-4">
        <div id="herosectwo" className="h-[300px] w-full max-w-[600px] grid place-content-center text-center">
          <div className="h-auto w-full grid place-content-center mb-4">
            <p className="text-xl font-medium bg-gradient-to-br from-cyan-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
              diagnosync medical care
            </p>
          </div>
          <div className="h-auto w-full grid place-content-center mb-4">
            <p className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-widest">
              Your Care Starts Here
            </p>
          </div>
          <div className="h-auto w-full grid place-content-center">
            <div className="h-[42px] w-[260px] bg-slate-900 rounded-full grid place-content-center">
              <Link className="h-full w-full text-lg text-white hover:scale-105 hover:text-gray-300 transition-all ease-in-out duration-200 flex items-center justify-center" to="/patient">
                Check Your Report
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="w-full min-h-screen bg-slate-950 select-none px-4">
        <div className="w-full py-8 flex flex-col lg:flex-row justify-center items-center gap-6">
          <div id="scsecone" className="w-full max-w-[460px] h-[100px] hover:scale-90 transition-all ease-in-out duration-200 gap-4 bg-transparent flex justify-center items-center text-white">
            <i className="bx bx-time text-3xl"></i>
            <div>
              <p className="text-lg font-bold">Monday - Friday</p>
              <span><p className="text-md">9am - 6pm</p></span>
            </div>
          </div>
          <div id="scsectwo" className="w-full max-w-[460px] h-[100px] hover:scale-90 transition-all ease-in-out duration-200 gap-4 bg-transparent flex justify-center items-center text-white">
            <i className="bx bx-time text-3xl"></i>
            <div>
              <p className="text-lg font-bold">Saturday</p>
              <span><p className="text-md">9am - 3pm</p></span>
            </div>
          </div>
          <div id="scsecone" className="w-full max-w-[460px] h-[100px] hover:scale-90 transition-all ease-in-out duration-200 gap-4 bg-transparent flex justify-center items-center text-white">
            <i className="bx bx-time text-3xl"></i>
            <div>
              <p className="text-lg font-bold">Sunday</p>
              <span><p className="text-md">12pm - 3pm</p></span>
            </div>
          </div>
        </div>

        {/* Top Doctors Section */}
        <div className="w-full bg-gradient-to-b from-slate-950 to-white flex flex-col lg:flex-row justify-center items-center gap-8 py-10">
          {/* Doctor 1 */}
          <div className="h-auto w-full max-w-[400px]">
            <img src={dimgone} alt="image" className="h-[300px] w-full hover:scale-105 transition-transform duration-300 shadow-lg" />
            <div className="pl-[10px] pt-[5px]">
              <p className="text-[17px] font-semibold text-white lg:text-slate-800 underline underline-offset-2 lg:decoration-slate-800 decoration-white">
                Dr'Surbhi Mishra
              </p>
              <p className="text-[15px] font-medium text-white lg:text-slate-800">Neurologist</p>
              <p className="text-[15px] font-medium text-white lg:text-slate-800">Experience: 8+ Years</p>
              <p className="text-md font-normal text-white lg:text-slate-800">MBBS</p>
              <p>
                <i className='bx bxs-star text-pink-800'></i>
                <i className='bx bxs-star text-pink-700'></i>
                <i className='bx bxs-star text-pink-600'></i>
                <i className='bx bxs-star text-pink-500'></i>
                <i className='bx bxs-star-half text-pink-400'></i>
              </p>
            </div>
          </div>


          {/* Doctor 2 */}
          <div className="h-auto w-full max-w-[400px]">
            <img src={dimgtwo} alt="image" className="h-[350px] w-full hover:scale-105 transition-transform duration-300 shadow-lg" />
            <div className="pl-[10px] pt-[5px]">
              <p className="text-[17px] font-semibold text-white lg:text-slate-800 underline underline-offset-5 lg:decoration-slate-800 decoration-white">Dr'Mayank Rathore</p>
              <p className="text-[15px] font-medium text-white lg:text-slate-800">Cardiologist</p>
              <p className="text-[15px] font-medium text-white lg:text-slate-800">Experience: 15+ Years</p>
              <p className="text-md font-normal     text-white lg:text-slate-800">MBBS</p>
              <p>
                <i className='bx bxs-star text-pink-800'></i>
                <i className='bx bxs-star text-pink-700'></i>
                <i className='bx bxs-star text-pink-600'></i>
                <i className='bx bxs-star text-pink-500'></i>
                <i className='bx bxs-star text-pink-400'></i>
              </p>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="h-auto w-full max-w-[400px]">
            <img src={dimgthree} alt="image" className="h-[300px] w-full hover:scale-105 transition-transform duration-300 shadow-lg" />
            <div className="pl-[10px] pt-[5px]">
              <p className="text-[17px] font-semibold text-slate-800 underline underline-offset-2 decoration-slate-800">Dr'Rishi Jaiswal</p>
              <p className="text-[15px] font-medium text-slate-800">Orthopedic Surgeon</p>
              <p className="text-[15px] font-medium text-slate-800">Experience: 10+ Years</p>
              <p className="text-md font-normal text-slate-800">MBBS</p>
              <p>
                <i className='bx bxs-star text-pink-800'></i>
                <i className='bx bxs-star text-pink-700'></i>
                <i className='bx bxs-star text-pink-600'></i>
                <i className='bx bxs-star text-pink-500'></i>
                <i className='bx bxs-star-half text-pink-400'></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
