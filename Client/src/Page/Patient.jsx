import axios from "axios"
import { useState , useEffect } from "react"

function Patient() {

  const [data , setData] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/api/patient').
    then((response) => {
      setData(response.data)
    })
    .catch((error) => {
           console.log("ERROR :" , error)
    })
  })

     return(
        <>
          <div className="w-full h-screen grid place-content-center bg-transparent text-rose-100 text-4xl font-bold">
          <h1 className="flex justify-center items-center">Hello Testing Patient Detail Page</h1>
           <p className="flex justify-center items-center">With Futuristic Ui</p>


           {data?.map((item, index) => (
          <div key={index}>
            <p className="text-2xl text-slate-950">{item.Title}</p>
            <p className="text-lg text-slate-950">{item.Name}</p>
          </div>
          ))}
         

         {data?.map((itemtwo, index) => (
          <div key={index}>
            <p className="text-2xl text-slate-950">{itemtwo.Age}</p>
            <p className="text-lg  text-slate-950">{itemtwo.Address}</p>
          </div>
          ))}

          </div>
        </>
     )
}
export default Patient;