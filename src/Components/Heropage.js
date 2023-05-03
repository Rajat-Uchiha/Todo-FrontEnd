import React from "react";
import HeroImage from "../Images/HeroImage.jpg";
import { Link } from "react-router-dom";
const Heropage = () => {
  return (
    <section className="mx-2 lg:ml-40 min-h-screen space-y-3 lg:space-y-0 lg:flex justify-center items-center  ">
      <div className="lg:w-1/2 flex justify-center items-center lg:justify-start lg:items-start  ">
        <div className="flex flex-col justify-center items-start py-6">
          <h1 className=" text-5xl px-2 lg:text-9xl text-gray-800 font-bold py-2 font-Delicious">
            "Achieve your goals one task at a time"
          </h1>
          <Link
            to="/signup"
            className=" font-Delicious text-3xl lg:text-5xl py-4 px-2 text-blue-700 font-bold underline underline-offset-2 hover:-translate-y-4 transition-all"
          >
            Join Now
          </Link>
        </div>
      </div>
      <div className=" lg:w-1/2 py-6">
        <div>
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Heropage;
