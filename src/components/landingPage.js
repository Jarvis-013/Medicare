import React from "react";
import Navhome from "./navhome";
import Footer from "./footer";
import About from "./About";
import Hero from "./hero";
import Hero1 from "./hero1";
import Faq from "./faq";
const LandingPage = () => {
  return (
    <div className="flex flex-col  w-full h-full text-white bg-gray-900  ">

      <Navhome />
      <Hero1/>
      <Hero/>
      <About/>
      <Faq/>
    <Footer/>

      
    </div>
  );
};
export default LandingPage;
