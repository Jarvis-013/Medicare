import React from "react";
const Hero = () => {
  return (<>
<br></br>
    <div className="container">
    <h1 className="text-center mb-6 text-4xl font-bold">How it works</h1>
    <div className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-3 lg:mt-8 lg:gap-x-8">
      <div className="transition-all duration-200 bg-gray-900 rounded-xl text-gray-100 hover:bg-gray-800">
        <div className="py-10 px-9">
          <img
            alt="Build from scratch or select prebuilt tailwind templates"
            src="./Doctors-pana.svg"
          />
          <h3 className="mt-8 text-lg font-semibold">
            Contact near by Doctors...
          </h3>
          <p className="mt-4 text-base text-gray-300">
          To contact a doctor, simply schedule an appointment through our app or website. Our team of experienced professionals is readily available to provide personalized care and support for your health needs.
          </p>
        </div>
      </div>
    
      <div className="transition-all duration-200 bg-gray-900 rounded-xl text-gray-100 hover:bg-gray-800">
        <div className="py-10 px-9">
          <img
            alt="Build from scratch or select prebuilt tailwind templates"
            src="./Online Doctor-pana.svg"
          />
          <h3 className="mt-8 text-lg font-semibold">
            Medical History
          </h3>
          <p className="mt-4 text-base text-gray-300">
          Managing your health history ensures accurate and personalized care, facilitating better communication with healthcare providers and informed decision-making for optimal well-being.
          </p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-gray-900 rounded-xl text-gray-100  hover:bg-gray-800">
        <div className="py-10 px-9">
          <img
            alt="Build from scratch or select prebuilt tailwind templates"
            src="./Calendar-bro.svg"
          />
          <h3 className="mt-8 text-lg font-semibold">
            Track your Appointments
          </h3>
          <p className="mt-4 text-base text-gray-300">
          Managing your health history ensures accurate and personalized care, facilitating better communication with healthcare providers and informed decision-making for optimal well-being.
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};
export default Hero;
