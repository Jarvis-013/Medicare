import React, { useState } from "react";
import './hero1.css'
const Hero1 = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="flex flex-wrap p-3 mt-4">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                MediCare<span className="text-green-700">.</span>
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Your <span className="text-green-700">healthcare hub</span>,
                  be a medical professional.
                </h1>
                <div className="w-20 h-2 bg-green-700 my-4" />
                <p className={`text-xl mb-10 ${showMore ? "show" : "hide"}`}>
                  Unlocking a world of healthcare convenience, our app
                  streamlines appointments, connects you with top-notch
                  professionals, and puts your well-being front and center.
                  With intuitive design and comprehensive features, your health
                  is in trusted hands, every step of the way.
                </p>
                {showMore && (
                  <p className={`text-xl mb-10 ${showMore ? "show" : "hide"}`}>
                    Discover a world of healthcare innovation with the Medicare
                    app. Access a comprehensive library of health resources,
                    from educational articles to interactive tools, empowering
                    you to make informed decisions about your health. Seamlessly
                    integrate with wearable devices to monitor fitness goals
                    and track progress, enhancing your overall wellness
                    journey. With secure messaging features, communicate with
                    healthcare providers easily and confidentially, ensuring
                    prompt and personalized care whenever you need it.
                  </p>
                )}
                <button
                  className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show Less" : "Learn More"}
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </>
  );
};

export default Hero1;
