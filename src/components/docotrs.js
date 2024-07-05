import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navhome2 from './navhome';
const DoctorInfo = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors/');
        setDoctors(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        
      }
    };

    fetchData();
  }, []);

  return (<>
  <Navhome2/>
    <div className="container mx-auto px-4 mt-2 py-8">
      <div className="bg-white rounded-lg shadow-md p-2 pt-2 mb-3 text-center">
        <h1 className="text-3xl font-bold mb-4">Doctors Information</h1>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              {console.log(doctor.image)}
                 <div>
                <h2 className="text-xl font-semibold mb-2">Name: <span className="font-bold">Dr.{doctor.name}</span></h2>
                <p className="text-gray-600 mb-2"><span className='font-bold'>Gender:</span> {doctor.gender}</p>
                <p className="text-gray-600 mb-2"><span className='font-bold'>Age:</span> {doctor.age}</p>
                <p className="text-gray-600 mb-2"><span className='font-bold'>Qualifications:</span> {doctor.qualifications}</p>
                <p className="text-gray-600 mb-2"><span className='font-bold'>Specialty:</span> {doctor.specialization}</p>
                {/* Add more fields if necessary */}
                <p className="text-gray-600 mb-2"><span className='font-bold'>Experience:</span> {doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div></>
  );
};

export default DoctorInfo;
