import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from 'react-router-dom';

function Appointment () {
  const [patient, setPatient] = useState({});
  const [appointments, setAppointments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const patientId = localStorage.getItem('patientId');
  console.log(patientId)
  useEffect(() => {
    async function fetchData() {
      try {
        const patientResponse = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/`);
        const appointmentResponse = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/appointments/`);
        
        setPatient(patientResponse.data);
        setAppointments(appointmentResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navhome2 />
      <section className="section main-section grid grid-cols-5">
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="col-span-4">
          <div className="appintment cards mt-[5%]">
            <div className="bg-white rounded-lg shadow-md p-2 pt-2 text-center">
              
              <h1 className="text-2xl font-bold mb-4 text-center">Appointments</h1>
            </div>
            <br></br>
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="text-gray-600">
                <p><span className="font-bold">Patient Name:</span> {patient.name}</p>
                <p><span className="font-bold">Gender:</span> {patient.gender}</p>
                <p><span className="font-bold">Age:</span> {patient.age}</p>
              </div>
            </div>
            {isLoading ? (
              <p>Loading appointment data...</p>
            ) : (
              appointments.length === 0 ? (
                <p className="text-white">No appointments available</p>
              ) : (
                appointments.map(appointment => (
                  <div key={appointment.appointment_id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div className="text-gray-600">
                      <p><span className="font-bold">Doctor's Name:</span> {appointment.doc_name}</p>
                      <p><span className="font-bold">Appointment Date:</span> {appointment.date}</p>
                      <p><span className="font-bold">Appointment Time:</span> {appointment.time}</p>
                      <p><span className="font-bold">Problem:</span> {appointment.problem}</p>
                    </div>
                  </div>
                ))
              )
            )}
          </div>  <div className="flex flex-col flex-1 justify-center items-center mb-2">
         
       
          
          <Link
          
              to="/create_appointment"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              New Appointment
            </Link>
        </div>
        </div>
      
      </section>
      <Footer/>
    </>
  );
};

export default Appointment;
