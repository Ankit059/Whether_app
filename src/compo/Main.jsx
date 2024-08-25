import React from "react";
import Card from "./Card";
import img from '../images/sun_img.png'

const Main = () => {
  return (
    <>
      <div className="w-screen fixed h-screen  border-black">
        <div className=" h-1/6 flex justify-center items-center mt-6 border-black">
          <input
            type="text"
            className="border-2 border-gray-500 h-2/5 rounded-3xl pl-6 text-xl font-semibold font-serif w-2/4"
            placeholder="Enter your city..."
          />
          <button className="border-black ml-2 rounded-2xl text-xl text-white font-serif bg-blue-800 h-2/5 w-24 cursor-pointer">
            Search
          </button>
        </div>
        <div className=" h-3/4 flex justify-center items-center  border-black">
          <div className="w-3/5 h-4/5 ml-6 flex rounded-3xl shadow-gray-60 shadow-lg border-2 border-gray-300">
            <div className=" border-black flex justify-center items-center w-3/5">
              <img src={img} className="w-80 rounded-3xl" alt="img" />
            </div>
            <div className=" border-black flex flex-col justify-center items-center w-2/5">
              <div className="text-xl font-serif font-semibold border-black ">Today</div>
              <div className="text-4xl font-extrabold font-serif border-black mt-6">New York</div>
              <div className="text-xl font-serif text-blue-600 border-black mt-6">Temperature:17</div>
              <div className="text-xl font-serif text-blue-600 border-black mt-2">Clear sky</div>
            </div>
          </div>
          <div className="w-2/4 h-full grid grid-cols-2 gap-4 p-12  border-black">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
