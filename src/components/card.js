import React, { useState, useEffect } from "react";
import axios from 'axios';

function Card () {
    const [patient, setPatient] = useState({});
    const patientId = localStorage.getItem('patientId');
    console.log(patientId)
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

    return (
      <>
        <div className="card bg-white shadow-md w-[80%] mt-[6%] p-4">
          <header className="card-header bg-gray-800 text-white py-3 px-4">
            <p className="card-header-title">

              <span className="icon">
                                <i className="mdi mdi-account" />
              </span>
              Patient Info
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
            <label className="label text-lg font-semibold ">Patient ID</label>
            <p className="text-lg font-semibold">{patientId}</p>
            <br/>

              <label className="label text-lg font-semibold ">Name</label>
              <p className="text-lg font-semibold">{patient.name}</p>
              <br/>
              <label className="label text-lg font-semibold">Email</label>
              <p className="text-lg font-semibold">{patient.email}</p>

            </div>
            <hr className="my-4" />

          </div>
        </div>
      </>
    );
};

export default Card;
