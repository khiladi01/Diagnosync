import React from "react"
import { Router, Routes , Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import Patient from "./Page/Patient"
import Medicine from "./Page/Medicine";
import Totalbill from "./Page/TotalBill";
import Account from "./Page/Account"

function App() {
  
  return (
    <>
      <Nav />
      
      <Routes>
          
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/totalbill" element={<Totalbill />} />
      <Route path="/account" element={<Account />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
