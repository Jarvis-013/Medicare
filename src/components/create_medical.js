import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navhome2 from './navhome';
 // Import your medical history image component

const MedicalHistoryForm = () => {
  const [medicalHistory, setMedicalHistory] = useState('');
  const [anyDisease, setAnyDisease] = useState('');
  const patientId = localStorage.getItem('patientId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/patients/${patientId}/create_medical`, {
        medical_history: medicalHistory,
        any_disease: anyDisease,
        patient: patientId // Set patient field to patientId
      });
      console.log('Medical history created:', response.data);
      window.location.href = '/dashboard';
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error creating medical history:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <>
      <Navhome2 />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-lg mx-auto mt-8"
      >
          <img src='./Online Doctor-pana.svg'/>{/* Render your medical history image component */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="medicalHistory" className="block text-gray-700 text-sm font-bold mb-2">Medical History:</label>
            <textarea id="medicalHistory" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="anyDisease" className="block text-gray-700 text-sm font-bold mb-2">Any Disease:</label>
            <input type="text" id="anyDisease" value={anyDisease} onChange={(e) => setAnyDisease(e.target.value)} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </motion.div>
    </>
  );
};

export default MedicalHistoryForm;
