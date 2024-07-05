import React from "react";
import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import Card from "./card";

const Dashboard = () => {
  return (
    <>
      <Navhome2 />

      <section className="section main-section grid grid-cols-4">
      <div className="col-span-1">
     <Navbar />
  </div>

  <div className="col-span-3">
     <Card/>
  </div>


      </section>
    </>
  );
};

export default Dashboard;