import React from "react";
import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import Card from "./card";
import MyComponent from "./chart";

const Dash_record = () => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        {/* Sidebar */}
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          {/* Profile */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <a href="/dashboard"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg></a>
          </div>
          {/* Courses */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <a href="./dash_search"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg></a>
          </div>
          {/* Theme */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <a href="/My_dash"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg></a>
          </div>
          {/* Configuration */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <a href=""><svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg></a>
          </div>
        </aside>
        <div className="w-full h-full flex flex-col justify-between">
          {/* Header */}
          <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
            {/* Informação */}
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">
              {/* Texto */}
              <div className="flex flex-col items-end ">
                {/* Nome */}
                <div className="text-md font-medium ">Unknow Unknow</div>
                {/* Título */}
                <div className="text-sm font-regular">Student</div>
              </div>
              {/* Foto */}
              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400" />
            </div>
          </header>
          {/* Main */}
          <main className="max-w-full h-full flex relative overflow-y-hidden">
            {/* Container */}
            <div className="h-full w-full m-4 items-start justify-start rounded-tl    gap-4 overflow-y-scroll">
              {/* Container */}
              <div className="w-[full] h-auto rounded-lg flex-shrink-0  bg-gray-300 mb-5">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content grid grid-cols-3 py-4 px-6  gap-4 items-center">
                <div className="w-96 h-[auto] rounded-lg flex-shrink-0 flex-grow bg-gray-200">
               
                <div className="card-content py-4 px-6">
            <div className="h-auto w-[60%] mx-auto">
              <img
                alt="Build from scratch or select prebuilt tailwind templates"
                src="./Doctors-pana.svg"
                className="full-rounded"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          
            
            <div className="field mb-4">
              <label className="label text-lg font-semibold">Name</label>
              <p className="text-lg font-semibold">Response</p>
              
            </div>
            <div className="field mb-4">
              <label className="label text-lg font-semibold">Name</label>
              <p className="text-lg font-semibold">Response</p>
              
            </div>
          
          
          </div>
              </div>
                  <div className="charts col-span-2 w-[90%]  ">
                    {" "}
                    <MyComponent />
                  </div>
                </div>
              </div>
              <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
  <main className="w-full flex-grow p-6">
    <h1 className="text-3xl text-black pb-6">Tables</h1>
    <div className="w-full mt-6">
      <p className="text-xl pb-3 flex items-center">
        <i className="fas fa-list mr-3" /> Table Example
      </p>
      <div className="bg-white overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Last name
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Phone
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="w-1/3 text-left py-3 px-4">Lian</td>
              <td className="w-1/3 text-left py-3 px-4">Smith</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
              <td className="text-left py-3 px-4">
                <a
                  className="hover:text-blue-500"
                  href="mailto:jonsmith@mail.com"
                >
                  jonsmith@mail.com
                </a>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">Emma</td>
              <td className="w-1/3 text-left py-3 px-4">Johnson</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
              <td className="text-left py-3 px-4">
                <a
                  className="hover:text-blue-500"
                  href="mailto:jonsmith@mail.com"
                >
                  jonsmith@mail.com
                </a>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">Oliver</td>
              <td className="w-1/3 text-left py-3 px-4">Williams</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
              <td className="text-left py-3 px-4">
                <a
                  className="hover:text-blue-500"
                  href="mailto:jonsmith@mail.com"
                >
                  jonsmith@mail.com
                </a>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">Isabella</td>
              <td className="w-1/3 text-left py-3 px-4">Brown</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
              <td className="text-left py-3 px-4">
                <a
                  className="hover:text-blue-500"
                  href="mailto:jonsmith@mail.com"
                >
                  jonsmith@mail.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
    <div className="w-full mt-12">
      <p className="text-xl pb-3 flex items-center">
        <i className="fas fa-list mr-3" /> Table Example
      </p>
      <div className="bg-white overflow-auto">
        <table className="text-left w-full border-collapse">
          {" "}
          {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Name
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Last Name
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Phone
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Lian</td>
              <td className="py-4 px-6 border-b border-grey-light">Smith</td>
              <td className="py-4 px-6 border-b border-grey-light">
                622322662
              </td>
              <td className="py-4 px-6 border-b border-grey-light">
                jonsmith@mail.com
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Lian</td>
              <td className="py-4 px-6 border-b border-grey-light">Smith</td>
              <td className="py-4 px-6 border-b border-grey-light">
                622322662
              </td>
              <td className="py-4 px-6 border-b border-grey-light">
                jonsmith@mail.com
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Lian</td>
              <td className="py-4 px-6 border-b border-grey-light">Smith</td>
              <td className="py-4 px-6 border-b border-grey-light">
                622322662
              </td>
              <td className="py-4 px-6 border-b border-grey-light">
                jonsmith@mail.com
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Lian</td>
              <td className="py-4 px-6 border-b border-grey-light">Smith</td>
              <td className="py-4 px-6 border-b border-grey-light">
                622322662
              </td>
              <td className="py-4 px-6 border-b border-grey-light">
                jonsmith@mail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    <div className="w-full mt-12">
      <p className="text-xl pb-3 flex items-center">
        <i className="fas fa-list mr-3" /> Table Example
      </p>
      <div className="bg-white overflow-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Vera Carpenter
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Admin</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden=""
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  />
                  <span className="relative">Activo</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Blake Bowman
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Editor</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 01, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden=""
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  />
                  <span className="relative">Activo</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Dana Moore
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Editor</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 10, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                  <span
                    aria-hidden=""
                    className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                  />
                  <span className="relative">Suspended</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Alonzo Cox
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Admin</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                  <span
                    aria-hidden=""
                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  />
                  <span className="relative">Inactive</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </main>
</div>

            </div>
            
          </main>
        </div>
      </div>
    </>
  );
};

export default Dash_record;
