import React, { useState } from "react";
import img from "../images/whether_logo.jpg";
import user_img from "../images/user_round.png";

export const Navbar = () => {

    const [visibilty, setVisibility] = useState(true);

  const show = () => {

  };

  return (
    <>
      <div className="relative w-screen h-14 bg-fixed border-black bg-gray-500">
        <div className="relative border-black">
          <div className=" border-black w-52 h-14 ">
            <div className=" flex mb-5 ">
              <img src={img} className="w-16 h-12 mt-1 ml-2" alt="img" />
              <div className="">
                <h1 className="text-3xl font-sans    ml-2 text-yellow-500 cursor-pointer">
                  <div>Whether.com</div>
                </h1>
                <h1 className="text-xs font-serif ml-2 text-yellow-500 ">
                  explore the whether of your area
                </h1>
              </div>
            </div>
          </div>

          <div className="w-5/6 h-14 flex justify-end items-center absolute top-0 right-0  border-black ">
            {/* <div className="">
              <input
                className=" w-96 h-10 mr-2 rounded-xl text-lg font-semibold pl-4 border-2 border-black "
                type="text"
                placeholder="Search location"
              />
              <button className=" font-semibold text-lg px-4 py-0.5 mr-6 rounded-lg text-white bg-gray-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">
                Search
              </button>
            </div> */}
            <img
              src={user_img}
              onClick={() => setVisibility(!visibilty)}
              className="w-12 mr-2 cursor-pointer"
              alt="user_img"
            />
          </div>
          {/* <table className={`absolute flex flex-col justify-center items-center right-0  border-2 border-gray-300 bg-gray-300 ${visibilty ? 'opacity-100' : 'opacity-0'}`}> */}
          <table className="absolute flex flex-col justify-center items-center right-0  border-2 border-gray-300 bg-gray-300 opacity-0 hover:opacity-100">
            <tr>
              <td className="text-lg w-28 text-center font-serif border-2 border-gray-300 text-blue-500">
                Ankit
              </td>
            </tr>
            <tr>
              <td className="text-sm w-28 text-center font-serif border-2 border-gray-300 text-blue-500">
                Location
              </td>
            </tr>
            <tr>
              <td className="text-lg w-28 text-center font-serif underline border-2 border-gray-500 cursor-pointer text-red-500">
                Logout
              </td>
            </tr>
          </table>
          
        </div>
      </div>
    </>
  );
};
