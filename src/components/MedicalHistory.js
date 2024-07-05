import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function MedicalCard () {

  const [patient, setPatient] = useState({});
  const patientId = localStorage.getItem('patientId');
  useEffect(() => {
    async function fetchPatient() {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/`);
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
    fetchPatient();
  }, []);
  const [medicalhistory, setmedicalhistory] = useState({});

  useEffect(() => {
    async function fetchhistory() {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/medicalHistory/`);
        setmedicalhistory(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
    fetchhistory();
  }, []);

  return (
<>    <Navhome2 />

    <section className="section main-section grid grid-cols-5">
    <div className="col-span-1">
   <Navbar />
</div>

<div className="col-span-4">
    <div className="appintment cards mt-[5%]">
    <div className="bg-white rounded-lg shadow-md p-2 pt-2 text-center">
    <h1 className="text-2xl font-bold mb-4 text-center">Medical History</h1>
</div>

    <br></br>
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">

  <div className="text-gray-600">
    <p><span className="font-bold">Patient Name:</span> {patient.name}</p>
    <p><span className="font-bold">Gender:</span> {patient.gender}</p>
    <p><span className="font-bold">Age:</span> {patient.age}</p>
  </div>
</div>

<div className="bg-white rounded-lg shadow-md p-6 mb-4">
    
<div className="text-gray-600">
  <p><span className="font-bold">Medical History:</span> {medicalhistory.medical_history}</p>
</div>
</div>

<div className="bg-white rounded-lg shadow-md p-6 mb-4">

<div className="text-gray-600">
  <p><span className="font-bold">Past Diseases:</span> {medicalhistory.any_disease}</p>
</div>
</div>
<Link
          
          to="/create_medical"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New medical_history
        </Link>
     </div>
    
      </div>
    
    </section>
    
    </>

  );
};

export default MedicalCard;
