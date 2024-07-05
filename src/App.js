import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import LandingPage from './components/landingPage';
import SignUp from './components/sign_up';
import Dashboard from './components/dashboard';
import AppointmentCard from './components/Appointment';
import DoctorInfo from './components/docotrs';
import MedicalCard from './components/MedicalHistory';
import MyForm from './components/patient';
import DoctorForm from './components/docotr_create';
import PaymentForm from './components/payment';
import AppointmentForm from './components/make_appointment';
import MedicalHistoryForm from './components/create_medical';
import SignUp_ori from './components/signup';
import AboutUs from './components/about_page';
import Contacts from './components/contact_page';
import PatientFormedit from './components/create_patient';
import DoctorLogin from './components/logindoc';
import Dashboard2 from './components/doc_dash';
import ChooseLoginMethod from './components/login_opt';
import DoctorAppointments from './components/appointments_doc';
import DashSearch from './components/dash_search';
import Dash_record from './components/dash_record';
import MyCousre from './components/mycourses';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51OzauHSIgExlX5l4Ji75WDV9wygJTSmn8QFzs2kFZfaiPUlDZjUuj7CnaDqfiiKgiYc6r7c4NuGQNwZV2X4oTew500xihdBkyw');

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <div>
        <Routes>
          <Route exact path="/sign_up" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Appointment" element={<AppointmentCard />} />
          <Route exact path="/MedicalHistory" element={<MedicalCard />} />
          <Route exact path="/DoctorInfo" element={<DoctorInfo />} />
          <Route exact path="/patient_create" element={<MyForm />} />
          <Route exact path="/doctor_create" element={<DoctorForm />} />

          {/* Wrap the PaymentForm with Elements provider */}
          <Route
            exact
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            }
          />

          <Route exact path="/create_appointment" element={<AppointmentForm />} />
          <Route exact path="/create_medical" element={<MedicalHistoryForm />} />
          <Route exact path="/signup" element={<SignUp_ori />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/create_patient" element={<PatientFormedit />} />
          <Route exact path="/doc_login" element={<DoctorLogin />} />
          <Route exact path="/doc_dash" element={<Dashboard2 />} />
          <Route exact path="/login_opt" element={<ChooseLoginMethod />} />
          <Route exact path="/appointments_doc" element={<DoctorAppointments />} />
          <Route exact path="/dash_search" element={<DashSearch />} />
          <Route exact path="/dash_record" element={<Dash_record />} />
          <Route exact path="/My_dash" element={<MyCousre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
