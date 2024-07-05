import React, { useState, useEffect } from "react";
import axios from 'axios';
import PatientForm from "./patient";

function Card () {
    const [patient, setPatient] = useState({});
    const docId = localStorage.getItem('doctorId');
    console.log(docId)
    
   
    useEffect(() => {
      async function fetchPatient() {
        try {
          const { data } = await axios.get(`http://127.0.0.1:8000/api/doc/${docId}/`);
          setPatient(data);
          console.log(patient.name)
        } catch (error) {
          console.error("Error fetching patient data:", error);
        }
      }
      fetchPatient();
    }, []);

    return (
      <>
        <div className="card bg-white shadow-md w-[80%] mt-[6%] p-4">
          <header className="card-header bg-gray-800 text-white py-3 px-4">
            <p className="card-header-title">
              <a href="./create_patient"></a>
              <span className="icon">
                                <i className="mdi mdi-account" />
              </span>
              Doctor Info
            </p>
          </header>
          <div className="card-content py-4 px-6">
            <div className="h-auto w-[30%] mx-auto">
              <img
                alt="Build from scratch or select prebuilt tailwind templates"
                src="./Doctors-pana.svg"
                className="full-rounded"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
            <hr className="my-4" />
            
            <div className="field mb-4">
              <label className="label text-lg font-semibold">Name</label>
              <p className="text-lg font-semibold">{patient.name}</p>
              
            </div>
            <hr className="my-4" />
            <div className="field mb-4">
              <label className="label text-lg font-semibold">Age</label>
              
              <p className="text-gray-800">{patient.age} years old</p>
            </div>
            <hr className="my-4" />
            <div className="field mb-4">
              <label className="label text-lg font-semibold">Gender</label>
              <p className="text-gray-800">{patient.gender} </p>
            </div>
            <hr className="my-4" />
            <div className="field mb-4">
              <label className="label text-lg font-semibold">Specialization</label>
              <p className="text-gray-800">{patient.specialization} </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;
