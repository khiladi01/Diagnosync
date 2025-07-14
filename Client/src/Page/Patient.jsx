import axios from "axios"
import { useState, useEffect } from "react"
import imageone from "../assets/Patient/image.jpg"
import patientdecimage from "../assets/Patient/patient-img.png"
import "../Style/Patient.css"
import { Link } from "react-router-dom"

function Patient() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("http://localhost:3000/api/patient")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log("ERROR :", error)
      })
  })

  return (
    <>
      <div className="min-h-screen w-full bg-white select-none">
        {/* Title */}
        <div className="h-[50px] w-full grid place-content-center text-center px-4">
          {data?.map((item, index) => (
            <div key={index}>
              <p className="text-4xl text-slate-950 font-semibold">{item.Title}</p>
            </div>
          ))}
        </div>

        {/* Patient Section */}
        <div className="min-h-[650px] w-full flex flex-col items-center justify-center px-4 py-6">
          <div className="w-full max-w-[1200px] grid grid-rows-3 md:flex md:justify-center md:items-center md:h-[400px] gap-6">
            {/* Image */}
            <div id="patientpageimg" className="h-[300px] md:h-full w-full md:w-[500px] mx-auto">
              <img src={imageone} alt="image" className="h-full w-full object-cover" />
            </div>

            {/* Decorative image */}
            <div className="h-[400px] w-full md:w-[300px] grid place-content-center">
              <img src={patientdecimage} alt="" className="w-[250px] md:w-full h-auto mx-auto" />
            </div>

            {/* Patient Details */}
            <div id="patientdetail" className="w-full md:w-[500px]">
              <div className="h-[400px] w-auto space-y-1 text-left px-4 grid place-content-center">
                {data?.map((item, index) => (
                  <div key={index}>
                    <p className="text-lg text-slate-950 font-semibold">Name ⇨ <span className="font-normal">{item.Name}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Age ⇨ <span className="font-normal">{item.Age}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Address ⇨ <span className="font-normal">{item.Address}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Mobile ⇨ <span className="font-normal">{item.Mobile}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Email ⇨ <span className="font-normal">{item.Email}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis ⇨ <span className="font-normal">{item.Diagnosis}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Diagnosis By ⇨ <span className="font-normal">{item.DiagnosisBy}</span></p>
                    <p className="text-lg text-slate-950 pt-[5px] font-semibold">Treatment By ⇨ <span className="font-normal">{item.TreatmentBy}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 w-full flex flex-col sm:flex-row justify-center items-center gap-5">
            <div id="mainbuttonone" className="h-[40px] w-[80%] sm:w-[300px] hover:bg-rose-300 hover:scale-105 transition-all ease-in-out duration-200 grid place-content-center rounded-full">
              <Link className="h-full w-full uppercase text-lg bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text grid place-content-center font-medium hover:text-white tracking-widest" to="/">⇚ Prev</Link>
            </div>
            <div id="mainbuttontwo" className="h-[40px] w-[80%] sm:w-[300px] hover:bg-cyan-300 hover:scale-105 transition-all ease-in-out duration-200 grid place-content-center rounded-full">
              <Link className="h-full w-full uppercase text-lg bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text grid place-content-center font-medium hover:text-white transition-all ease-in-out duration-200 tracking-widest" to="/medicine">Next ⇛</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Patient;
