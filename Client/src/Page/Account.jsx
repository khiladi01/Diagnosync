import axios from "axios"
import { useState , useEffect } from "react"
import React from "react";
import { Link } from "react-router-dom"
import 'boxicons/css/boxicons.min.css';

function Account (){
 
    const[data , setData] = useState()

    useEffect(() => {
        axios.get("http://localhost:3000/api/patient")
        .then((response) => {
        setData(response.data)
        }) 
        .catch((error) => {
        console.log("Data Cannot Find :" , error)
        })
    })

    return(
        <>
         <div className="h-screen w-full bg-slate-950 grid place-content-center">
            {/* patient image */}
         <div className="h-[120px] w-full flex justify-center items-center">
         <div className="h-[120px] w-[120px] border-[2px] border-rose-500 rounded-full overflow-hidden">
            <img src="https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7221.jpg?w=2000" alt="image" />
         </div>
         </div>

         {/* patient detail */}
        <div className="pt-[50px] grid place-content-center"> {data?.map((item, index) => (
            <div key={index}>
             <p className="text-lg text-white font-semibold">Name ⇨ <span className="font-normal">{item.Name}</span></p>
                    <p className="text-lg text-white pt-[5px] font-semibold">Age ⇨ <span className="font-normal">{item.Age}</span></p>
                    <p className="text-lg text-white pt-[5px] font-semibold">Address ⇨ <span className="font-normal">{item.Address}</span></p>
                    <p className="text-lg text-white pt-[5px] font-semibold">Mobile ⇨ <span className="font-normal">{item.Mobile}</span></p>
                    <p className="text-lg text-white pt-[5px] font-semibold">Email ⇨ <span className="font-normal">{item.Email}</span></p>
                  </div>
          ))}
        </div>

        {/* add edit button */}
        <div className="mt-[50px] h-[50px] w-full flex justify-center items-center">
         <button className="h-[40px] w-[300px] text-lg font-medium uppercase flex justify-center items-center text-white border-[2px] border-cyan-400 rounded-full cursor-pointer hover:text-rose-200 transition-all ease-in-out duration-200"><span className="pr-[10px]"><i className='bx bx-edit text-lg text-cyan-400'></i></span> Edit</button>
         </div>

        <div id="mainbuttonone" className="mt-[20px] h-[40px] w-[300px] hover:bg-rose-300 hover:scale-105 transition-all ease-in-out duration-200 grid place-content-center  rounded-full">
               <Link className="h-[40px] uppercase text-lg bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text grid place-content-center font-medium hover:text-white tracking-widest" to="/">⇚ Back</Link>
            </div>

            {/* main div closing */}
         </div>
        </>
    )
}
export default Account;