import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000; //localhost 

app.use(cors({
    origin: '', // our frontend address its use when develop a MPA...
  }));

app.get("/api/patient" , (req,res) => {
       const PatientData = [
        {
            Title: "Patient Details",
            Name: "Rahul Singh",
            Age: 27,
            Address: "Patna",
            Mobile: 9956214578,
            Email: "rahul121@gmail.com",
            Diagnosis: "Migraine",
            DiagnosisBy: "Dr'Prabhat Singh (MBBS)",
            TreatmentBy: "Dr'Surbhi Mishra (MBBS)",
        }
       ]
       res.send(PatientData)
})

app.get("/api/medicine" , (req,res) => {
    const MedicineData = [
     {
         Title: "Medicine Data",
         FirstMed: "Sumatriptan  (Brand: Suminat, Imitrex)",
         SecondMed: "Rizatriptan (Brand: Maxalt)",
         ThirdMed: "Naproxen (Brand: Naprosyn, Aleve)",
         FourthMed: "Propranolol (Brand: Inderal)",
         FifthMed: "Topiramate (Brand: Topamax)",
         Diagnosis: "Migraine",
         DiagnosisBy: "Dr'Prabhat Singh (MBBS)",
         TreatmentBy: "Dr'Surbhi Mishra (MBBS)",
     }
    ]
    res.send(MedicineData)
})

app.get("/api/totalbill" , (req,res) => {
    const TotalBill = [
     {
         Title: "Total Medical Bill",
         Consultation: "Dr'Surbhi Mishra",
         Fee: "Rs 1000",
         Diagnosis: "Dr'Prabhat Singh",
         Fee: "Rs 1500",
         FirstMed: "Sumatriptan  (Rs 120)",
         SecondMed: "Rizatriptan (Rs 100)",
         ThirdMed: "Naproxen     (Rs 90)",
         FourthMed: "Propranolol (Rs 80)",
         FifthMed: "Topiramate   (Rs 99)",
         Diagnosis: "Migraine",
         DiagnosisBy: "Dr'Prabhat Singh (MBBS)",
         TreatmentBy: "Dr'Surbhi Mishra (MBBS)",
         Total: "Rs 2989"
     }
    ]
    res.send(TotalBill)
})

app.listen(port , () => {
    console.log(`server is running on http://localhost:${port}`)
})