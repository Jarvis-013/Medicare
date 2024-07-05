import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navhome2 from './navhome';
import Footer from './footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    contact_no: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register_user/', formData);
      console.log('User created:', response.data);
      setSuccessMessage('User created successfully.');
      setErrorMessage('');
      window.location.href = '/sign_up';

      // Redirect the user to the login page or any other page
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('Error creating user. Please try again.');
      setSuccessMessage('');
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <>
      <Navhome2 />
      <section className="vh-100" style={{ opacity: '1', backgroundColor: 'rgb(17 24 39 / var(--tw-bg-opacity))' }}>
        <div className="container py-5 h-auto">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="./Stem-cell research-cuate.svg" alt="Stem Cell Research" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="container mx-auto mt-8">
                        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500">
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
                            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="contact_no" className="block text-gray-700 font-bold mb-2">Contact Number</label>
                            <input type="text" id="contact_no" name="contact_no" value={formData.contact_no} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                          </div>
                          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                        </form>
                        <p className="mt-4">Already have an account? <Link to="/sign_up" className="text-blue-500">Login</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light text-center text-lg-start">
        <Footer />
      </footer>
    </>
  );
};

export default SignUp;