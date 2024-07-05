import React from "react";
import Navhome2 from "./navhome";
import Navbar2 from "./nav_doc";
import Card from "./card_doc";

const Dashboard2 = () => {
  return (
    <>
      <Navhome2 />

      <section className="section main-section grid grid-cols-4">
      <div className="col-span-1">
     <Navbar2 />
  </div>

  <div className="col-span-3">
     <Card/>
  </div>
       
        
      </section>
    </>
  );
};

export default Dashboard2;
