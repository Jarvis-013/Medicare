import React from 'react';
import Navhome2 from './navhome';
import Footer from './footer';

const Contacts = () => {
  return (
    <>
      <Navhome2 />
      <section className="container py-5 text-white">
        <h1 className="text-3xl font-bold mb-5">Contacts</h1>
        <p className="text-lg">Contact information will be available here soon. Stay tuned!</p>
      </section>
      <Footer />
    </>
  );
}

export default Contacts;
