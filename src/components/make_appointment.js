import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navhome2 from './navhome';
import Navbar from './Navbar';
const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors/');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);


  const [appointmentData, setAppointmentData] = useState({
    patient_id: '',
    doc_name: '',
    date: '',
    time: '',
    payment_mode: '',
    problem: ''
  });
  const patientId = localStorage.getItem('patientId');
  const [patients, setPatients] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  appointmentData.patient_id=patientId

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/patients/');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);
  const handleDoctorSelect = (e) => {
    setSelectedDoctor(e.target.value);
    setAppointmentData({ ...appointmentData, doc_name: e.target.value });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to store appointment data
      await axios.post('http://127.0.0.1:8000/api/appointments/create/', appointmentData);
      setIsSubmitted(true);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error submitting appointment data:', error);
      setError('An error occurred while submitting appointment data.');
    }
  };

  return (<>
  <Navhome2/>
 
    <div className="max-w-md mx-auto p-6 bg-white mt-[5%] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Appointment</h2>
      {isSubmitted ? (
        <p className="text-green-600 text-center">Appointment booked successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="doc_name" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
            <div>
            <select
  value={appointmentData.doc_name} // Set the value of the select field to appointmentData.doc_name
  onChange={handleDoctorSelect}
  className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
>
  <option value="">Select Doctor</option>
  {doctors.map((doctor) => (
    <option key={doctor.id} value={doctor.name}>Dr. {doctor.name}</option> // Set the value attribute to doctor.name
  ))}
</select>
     
    </div>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={appointmentData.date}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={appointmentData.time}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payment_mode" className="block text-sm font-medium text-gray-700">Payment Mode</label>
            <select
              id="payment_mode"
              name="payment_mode"
              value={appointmentData.payment_mode}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Online Payment">Online Payment</option>
              <option value="Insurance">Insurance</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="problem" className="block text-sm font-medium text-gray-700">Problem</label>
            <textarea
              id="problem"
              name="problem"
              value={appointmentData.problem}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Book Appointment</button>
        </form>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div></>
  );
};

export default AppointmentForm;
