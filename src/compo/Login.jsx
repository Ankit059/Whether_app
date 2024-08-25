import React, { useState } from 'react';
import img from '../images/whether_logo.jpg'
// import {useNavigate} from 'react-router-dom';

export const Login = () => {
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  // const navigate = useNavigate();

  const onSubmit = async (e) => {
    debugger;
    e.preventDefault();

    try {
      const data = { userid: userId, password: password };

    const response = await fetch('http://localhost:3002/api/auth', {
      method: 'POST', // Use POST for sending data in the request body
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error);
      } else {
        alert(result.message);
        // navigate("/")
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  return (
    <>
      <div className=" relative bg-gray-400 bg-cover bg-center h-screen flex flex-col justify-center items-center">
        <div className=" flex mb-8 ">
          <img src={img} className="w-16" alt="img" />
          <div className="">
            <h1 className="text-4xl font-serif ml-2 ">Whether.com</h1>
            <h1 className="text-sm font-serif ml-4 text-gray-800 ">
            explore the whether of your area
            </h1>
          </div>
        </div>
        <div className=" pt-3 w-full max-w-md px-8 py-0 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form className="relative">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="userId"
              >
                User Id
              </label>
              <input
                type="userId"
                id="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className="w-full bg-blue-500 mb-8 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
            <div className="absolute bottom-4 left-2 w-full text-xs text-center font-sans">If you want to know your password <span 
            // to="/forgetpass"
             className="text-blue-500 underline ml-1 text-xs cursor-pointer">Forget password</span>  </div>
            <div className=" absolute bottom-1 left-16 text-xs text-center font-sans">and for sign up  <span 
            // to="/signup"
             className="text-blue-500 underline ml-1 text-xs cursor-pointer">Sign up</span></div>
          </form>
        </div>
          {/* <p className=" cursor-pointer absolute top-12 right-28 mt-1 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-blue-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">Signup</p> */}
      </div>
    </>
  );
}

