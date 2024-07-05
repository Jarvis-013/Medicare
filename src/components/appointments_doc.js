import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navhome2 from "./navhome";
import Footer from "./footer";
import { Link } from 'react-router-dom';
import Navbar2 from "./nav_doc";

const DoctorAppointments = ({ doctorName }) => {
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState('');
    const [patient, setPatient] = useState({});
    const docId = localStorage.getItem('doctorId');
   
    useEffect(() => {
        async function fetchPatient() {
          try {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/doc/${docId}/`);
            setPatient(data);
            
          } catch (error) {
            console.error("Error fetching patient data:", error);
          }
        }
        fetchPatient();
      }, []);

      const docname =(patient.name)

    useEffect(() => {
        const fetchDoctorAppointments = async () => {
            try {
              const response = await axios.get(`http://127.0.0.1:8000/api/doctor-appointments/${docname}/`);
              if (response.status === 404) {
                setAppointments([]);
                setMessage("No appointments currently");
              } else {
                setAppointments(response.data);
                setMessage("");
              }
            } catch (error) {
              console.error('Error fetching doctor appointments:', error);
            }
          };
      
        
          fetchDoctorAppointments();
        }, [docname]);
  return (
    <>
      <Navhome2 />
      <section className="section main-section grid grid-cols-5">
        <div className="col-span-1">
          <Navbar2 />
        </div>
        <div className="col-span-4">
          <div className="appintment cards mt-[5%]">
            <div className="bg-white rounded-lg shadow-md p-2 pt-2 text-center">
              
              <h1 className="text-2xl font-bold mb-4 text-center">Appointments</h1>
            </div>
            <br></br>
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2>Appointments for {docname}:</h2>
            </div>
            <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            Patient: {appointment.patient_name}, Date: {appointment.date}, Time: {appointment.time}
          </li>
        ))}
      </ul>
          </div>  <div className="flex flex-col flex-1 justify-center items-center mb-2">
         
          {message && <p className="text-white">{message}</p>}
          
         
        </div>
        </div>
      
      </section>
      <Footer/>
    </>
  );
};

export default DoctorAppointments;
