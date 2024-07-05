import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navhome2 from './navhome';
import Footer from './footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/login/', formData);
      const { access, patient_id } = response.data;
      localStorage.setItem('accessToken', access); 
      localStorage.setItem('patientId', patient_id+10);
      const patientId = localStorage.getItem('patientId');
      console.log(patientId);
      // Redirect the user to the dashboard page
      window.location.href = '/dashboard';
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          setErrorMessage('Unauthorized access. Please check your credentials.');
        } else if (error.response.status === 500) {
          setErrorMessage('Internal Server Error. Please try again later.');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('No response received. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage('An unexpected error occurred.');
      }
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
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x vh-[90%] me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            />
                            <span className="h2 fw-bold mb-0">Welcome back 👋</span>
                          </div>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name="username" value={formData.username} onChange={handleChange} 
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name="password" value={formData.password} onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block bg-green-500 hover:bg-green-800"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <p className="text-danger">{errorMessage}</p>
                        <br></br>
                        <br></br>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            Register Now 
                          </Link>
                        </p>
                      </form>
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
}

export default SignUp;
