import axios from "axios"
import { useState , useEffect } from "react"
import imageone from "../assets/Patient/image.jpg"
import patientdecimage from "../assets/Patient/patient-img.png"
import "../Style/Patient.css"
import { Link } from "react-router-dom"
 
function Totalbill() {

  const [data , setData] = useState()

  useEffect(() => {
    axios.get('https://diagnosync.onrender.com/api/totalbill').
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
          <div className="h-[50px] w-full grid place-content-center text-center px-4">
          {data?.map((item, index) => (
          <div key={index}>
            <p className="text-4xl text-slate-950 font-semibold">{item.Title}</p>
          </div>
          ))}
          </div>

          {/* adding totalbill details */}
          <div className="min-h-[650px] w-full grid place-content-center px-4 py-6">
          <div className="w-full max-w-[1200px] grid grid-rows-3 md:flex justify-center items-center gap-6 h-auto md:h-[450px]">
            {/* image only */}
          <div id="patientpageimg" className="h-[300px] md:h-full w-full md:w-[500px] mx-auto">
            <img src={imageone} alt="image" className="h-full w-full object-cover" />
          </div>

          <div className="w-full md:w-[300px] grid place-content-center">
          <img src={patientdecimage} alt="" className="w-[250px] md:w-full h-auto mx-auto" />
          </div>

            {/* Totalbill details */}
          <div id="patientdetail" className="w-full md:w-[500px] grid place-content-center">
          <div className="h-[450px] w-auto grid place-content-center px-4">
          {data?.map((item, index) => (
          <div key={index}>
            <p className="text-lg text-slate-950 font-semibold">Consultation ⇨ <span className="font-normal">{item.Consultation}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Consultation Fee ⇨ <span className="font-normal">{item.Fee}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis Fee ⇨ <span className="font-normal">{item.Fee}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Med 1 Fee ⇨ <span className="font-normal">{item.FirstMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Med 2 Fee ⇨ <span className="font-normal">{item.SecondMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Med 3 Fee ⇨ <span className="font-normal">{item.ThirdMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Med 4 Fee ⇨ <span className="font-normal">{item.FourthMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Med 5 Fee ⇨ <span className="font-normal">{item.FifthMed}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis ⇨ <span className="font-normal">{item.Diagnosis}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis By ⇨ <span className="font-normal">{item.DiagnosisBy}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Treatment By ⇨ <span className="font-normal">{item.TreatmentBy}</span></p>
            <p className="text-lg text-slate-950 pt-[5px] font-semibold">Total Bill ⇨ <span className="font-normal">{item.Total}</span></p>
          </div>
          ))}
          </div>
          </div>
          </div>

          {/* adding button */}
          <div className="mt-[70px] h-[50px] gap-5 w-full bg-transparent flex justify-center items-center flex-col sm:flex-row">
            <div id="mainbuttonone" className="h-[40px] w-[80%] sm:w-[300px] hover:bg-rose-300 hover:scale-105 transition-all ease-in-out duration-200 grid place-content-center rounded-full">
               <Link className="h-[40px] w-full uppercase text-lg bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text grid place-content-center font-medium hover:text-white tracking-widest" to="/medicine">⇚ Prev</Link>
            </div>
          </div>
          {/* main div ending point */}
          </div>
          </div>
        </>
     )
}
export default Totalbill;
