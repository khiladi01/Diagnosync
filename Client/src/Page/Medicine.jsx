import axios from "axios"
import { useState , useEffect } from "react"
import imageone from "../assets/Patient/image.jpg"
import patientdecimage from "../assets/Patient/patient-img.png"
import "../Style/Patient.css"
import { Link } from "react-router-dom"
 
function Medicine() {

  const [data , setData] = useState()

  useEffect(() => {
    axios.get('').
    then((response) => {
      setData(response.data)
    })
    .catch((error) => {
           console.log("ERROR :" , error)
    })
  })

     return(
        <>
          <div className="min-h-screen w-full bg-white select-none">
          {/* adding title */}
          <div className="h-[50px] w-full grid place-content-center">
          {data?.map((item, index) => (
          <div key={index}>
            <p className="text-4xl text-slate-950 font-semibold">{item.Title}</p>
          </div>
          ))}
          </div>

          {/* adding patient details */}
          <div className="min-h-[650px] w-full grid place-content-center px-4 py-6">
          <div className="w-full max-w-[1200px] grid grid-rows-3 md:flex justify-center items-center gap-6 h-auto md:h-[400px]">

            {/* image  */}
          <div id="patientpageimg" className="h-[300px] md:h-full w-full md:w-[500px] mx-auto">
            <img src={imageone} alt="image" className="h-full w-full object-cover" />
          </div>

          <div className="w-full md:w-[300px] grid place-content-center">
          <img src={patientdecimage} alt="" className="w-[250px] md:w-full h-auto mx-auto" />
          </div>

            {/* medicine details */}
          <div id="patientdetail" className="w-full md:w-[500px]">
          <div className="h-[400px] w-auto px-4 grid place-content-center">
          {data?.map((item, index) => (
          <div key={index}>
            <p className="text-lg text-slate-950 font-semibold">Medicine 1 ⇨ <span className="font-normal">{item.FirstMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Medicine 2 ⇨ <span className="font-normal">{item.SecondMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Medicine 3 ⇨ <span className="font-normal">{item.ThirdMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Medicine 4 ⇨ <span className="font-normal">{item.FourthMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Medicine 5 ⇨ <span className="font-normal">{item.FifthMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis ⇨ <span className="font-normal">{item.Diagnosis}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis By ⇨ <span className="font-normal">{item.DiagnosisBy}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Treatment By ⇨ <span className="font-normal">{item.TreatmentBy}</span></p>
          </div>
          ))}
          </div>
          </div>
          </div>

          {/*  Button */}
          <div className="mt-[70px] h-[50px] gap-5 w-full bg-transparent flex flex-col sm:flex-row justify-center items-center">
            <div id="mainbuttonone" className="h-[40px] w-[80%] sm:w-[300px] hover:bg-rose-300 hover:scale-105 transition-all ease-in-out duration-200 grid place-content-center  rounded-full">
               <Link className="h-[40px] w-full uppercase text-lg bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text grid place-content-center font-medium hover:text-white tracking-widest" to="/patient">⇚ Prev</Link>
            </div>
            <div id="mainbuttontwo" className="h-[40px] w-[80%] sm:w-[300px] hover:bg-cyan-300 hover:scale-105 transition-all ease-in-out duration-200 grid place-content-center rounded-full">
               <Link className="h-[40px] w-full uppercase text-lg grid place-content-center bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-medium hover:text-white transition-all ease-in-out duration-200 tracking-widest" to="/totalbill">Next ⇛</Link>
            </div>
          </div>
          {/* main div ending point */}
          </div>
          </div>
        </>
     )
}
export default Medicine;
