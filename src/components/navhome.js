import React, { useState } from 'react';
// import "./nav.css";
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburger.js';
import "./nav.css";
// import GalleryTxt from './NavbarComps/GalleryTxt.jsx';

const Navhome2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-900 '>
    <div className=' lg:flex bg-gray 2k:hidden  hidden  items-center justify-center  '>
      <img
        className="flex items-center justify-center"
        alt=""
        src="/vector-line.svg" //uper white
      />
    </div>


    <div className="  relative bg-gray w-screen  h-[50px] 2k:h-[50px] flex  justice justify-between items-center  overflow-hidden text-center text-base  text-white font-audiowide pb-3 overflow-x-hidden">

      <div className='flex items-center justify-center'>
        <div className="pb-8 z-[500] pl-2  h-full left-[15px] pt-4 lg:hidden 2k:block">
          <HamburgerMenu />
        </div>
        <div className='z-10 flex items-start justify-start 2k:justify-end 2k:items-start 2k:absolute 2k:left-12 2k:pt-6  bc:mr-[80px] lg:pb-4 ' >
        <a href='/'><img
              className=" 2k:flex-shrink-0 2k:mr-80 2k:pr-80 cursor-pointer pt-7 md:w-[98px]  md:h-[70px] w-[60px] h-[50px] ab:w-[72px] ab:h-[60px]"
              alt=""
              src="./logo.svg"
            />
            </a>
        </div>
      </div>


      <div className='flex z-50 justice1 mr-2 2k:pt-12 2k:pr-8  pr-4 justify-center items-center pt-5 lg:pt-0 lg:pb-3 ab:pt-8 space-x-5'>

          <div className="relative pr-5 pl-1 ml-2 flex grow">
            <Link to="/login">
            <button className="cursor-pointer  test [border:none] md:p-0 ml-2 mr-5 pl-0 pr-0 bg-[transparent] ">

               <button className="cursor-pointer sm:hidden glow-animation [border:none] pr-9 bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center  items-center justify-center   [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]" >
                  Sign-in
                </button>

              </button>
            </Link>
          </div>


          <div className='relative   hidden sm:flex  grow '>
            <Link to="/login_opt">
              <button className="cursor-pointer [border:none] ml-5 mr-7 pl-0 pr-0 bg-[transparent] ">

                <div className="absolute flex top-[11px] left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
                <div className="absolute  flex  top-[11px] left-[107px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />

                <button className="  glow-animation flex cursor-pointer [border:none] p-0  bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center items-center justify-center ">
                  Sign-In
                </button>
              </button>
            </Link>
          </div>


      </div>


    </div>

    <div className="absolute bg-gray   hidden lg:block 2k:hidden  top-[40px] h-[30px]">
      <div className='flex  items-center w-screen justify-center space-x-8  cursor-pointer glow-animation'>

        <a href={'/about'} className='text-white z-20 no-underline'>
          About Us
        </a>


        <a href={'/contacts'} className='text-white z-20 no-underline'>Contact Us </a>

        <a href={'./DoctorInfo'} className='text-white z-50 bg-gray no-underline rounded-2xl'>Doctor  </a>

        <a href={'/doctor_create'} className='text-white z-20 no-underline'>New Doctor Registration </a>
      </div>

      <img
          className="absolute top-[16px] bg-gray  mt-[13px]  w-screen overflow-hidden h-[26px]"
          alt=""
          src="/vector-line2.svg" //dark bottom
        />

    </div>



  </div>
  );
};

export default Navhome2