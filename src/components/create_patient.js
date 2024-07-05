import React, { useState, useEffect } from "react";
import axios from 'axios';

import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import Card from "./card";

const PatientFormedit = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: localStorage.getItem('email') || '',
        contact_no: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make API request to save patient data
            const response = await axios.post('http://127.0.0.1:8000/api/patients/create/', formData);
            console.log('Patient data saved:', response.data);
            window.location.href = '/sign_up';
            // Handle success, e.g., redirect or show a success message
        } catch (error) {
            console.error('Error saving patient data:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

  return (
    <>
      <Navhome2 />

      <section className="section main-section grid grid-cols-4">
      <div className="col-span-1">
     <Navbar />
  </div>

  <div className="col-span-3">
  <div className="card bg-white shadow-md w-[80%] mt-[6%] p-4">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                    <p className="card-header-title">
                        <span className="icon">
                            <i className="mdi mdi-account" />
                        </span>
                        Patient Information Form
                    </p>
                </header>
                <div className="card-content py-4 px-6 border-b border-gray-300">
                    <form onSubmit={handleSubmit}>
                    <div className="field mb-4">
    <label className="label text-lg font-semibold pr-5">Name</label>
    <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
        required
    />
</div>
<hr className="my-4" />
<div className="field mb-4">
    <label className="label text-lg font-semibold pr-5 ">Age</label>
    <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
        required
    />
</div>
<hr className="my-4" />
<div className="field mb-4">
    <label className="label text-lg font-semibold pr-5">Gender</label>
    <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="select border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
        required
    >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
</div>
<hr className="my-4" />
<div className="field mb-4">
    <label className="label text-lg font-semibold pr-5">Contact Number</label>
    <input
        type="text"
        name="contact_no"
        value={formData.contact_no}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
        required
    />
</div>
<hr className="my-4" />
<div className="field mt-6">
    <button
        type="submit"
        className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Submit
    </button>
</div>

                          
                       
                    </form>
                </div>
            </div>
  </div>
       
        
      </section>
    </>
  );
};

export default PatientFormedit;
