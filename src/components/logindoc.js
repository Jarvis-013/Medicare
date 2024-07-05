import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navhome2 from './navhome';
import Footer from './footer';

const DoctorLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/login/${email}/${password}/doctor`);
        const doctorId = response.data.doctor_id;
        localStorage.setItem('doctorId', doctorId); // Store doctor ID in localStorage
        console.log(doctorId)
        const doctor_name = response.data.name;
        localStorage.setItem('doctorname', doctor_name);
        console.log(doctor_name)
        if (response.data) {
            window.location.href = '/doc_dash';
        } else {
          setError('Invalid email or password');
        }
      } catch (error) {
        setError('Error logging in');
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
                            name="username" value={email} onChange={(e) => setEmail(e.target.value)}
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
                            name="password" value={password} onChange={(e) => setPassword(e.target.value)}
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
                        {error && <p>{error}</p>}
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

export default DoctorLogin;
