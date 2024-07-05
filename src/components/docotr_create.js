import React, { useState } from 'react';
import axios from 'axios';
import Navhome2 from './navhome';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    age: '',
    specialization: '',
    qualifications: '',
    experience: '',
    doctor_id: '',
    contact_no: '',
    doctorImage: null,
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // State to store error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/doctors/create/', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting data:', error);
      if (error.response) {
        // If the server responds with errors, handle them here
        if (error.response.status === 400) {
          // If the status is 400 (Bad Request), it could be validation errors
          // You can customize this based on your server's response structure
          setError("Doctor ID already exists");
        } else if (error.response.status === 409) {
          // If the status is 409 (Conflict), it could be a duplicate doctor ID
          setError('Doctor ID already exists');
        } else {
          setError('An error occurred while submitting the form');
        }
      } else {
        setError('Network Error');
      }
    }
  };
  return (
    <>
      <Navhome2 />
      <div className="grid grid-cols-2 gap-0 mt-10">
        <div className="flex justify-center items-center">
          <img src="./Doctors-rafiki.svg" alt="Doctor" className="max-h-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-2 pt-2 text-center w-[80%]">
            <h1 className="text-2xl font-bold mb-4">Doctor Details</h1>
          </div>
          <br />
          <div className="flex justify-center items-center w-[80%]">
            <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg p-6 w-full">
               {error && <p className="text-red-500 text-center">{error}</p>} 
              {isSubmitted ? (
                <p className="text-green-500 text-center">Thank you for submitting the doctor data!</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">Specialization</label>
                  <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualifications">Qualifications</label>
                  <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Qualifications" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">Experience</label>
                  <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor_id">Doctor ID</label>
                  <input type="text" name="doctor_id" value={formData.doctor_id} onChange={handleChange} placeholder="Doctor ID" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact_no">Contact Number</label>
                  <input type="text" name="contact_no" value={formData.contact_no} onChange={handleChange} placeholder="Contact Number" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degreeImage">Degree Image</label>
                  <input type="file" name="doctorImage" value={formData.doctorImage} accept="image/*" onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorForm;
