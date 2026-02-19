import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { CgLogIn } from "react-icons/cg";

function EmailInput() {
  const [email, setEmail] = useState("");
  const handleEmail = (value) => {
    setEmail(value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (value) => {
    setPassword(value);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      setIsLoggedIn(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-r from black to-blue-900 w-full h-screen flex flex-col items-center justify-center">
  <div className=" bg-black backdrop-blur-md grid grid-cols-1 md:grid-cols-2 w-full h-screen  shadow-2xl ">
        <div className="relative  h-full w-full">
          <img      
            src="/images/image.jpg"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white space-x-8 mx-8">
          <div className="w-full flex justify-end pt-0 mx-3 text-sm">
            <label htmlFor="#" className="text-orange-300 font-semibold"
              onClick={()=>alert("singn up accout")}>
              Sign up
            </label>
          </div>
          <h1 className="flex justify-center">
            <img
              src="/images/image.png"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </h1>

          <div>
            <h3 className="text-3xl font-bold text-center">
              Login to your Account
            </h3>

            <p className="text-gray-300 pt-4 flex justify-center text-sm ">
              Enter your details below to proceed
            </p>

            <div className="space-y-10">
              <div className="relative mx-12">
                <label htmlFor="email" className="text-white font-semibold mx-3">
                  Email
                </label>
                <i className="fa-solid fa-envelope absolute bottom-1 py-2 mx-2 left-7 text-blue-400"></i>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => handleEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 mx-2 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative mx-12 ">
                <label htmlFor="password" className="text-white font-semibold mx-3">
                  Password
                </label>
                <i className="fa-solid fa-lock absolute bottom-10 py-2 mx-2 left-7 text-blue-400"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handlePassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 mx-2 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="relative space-y-10 w-full flex justify-end mx-4 pt-4 text-sm">
                  <span className="text-orange-300 font-sm cursor-pointer"
                    onClick={()=>alert("forgot password clicked")}>
      
                    forgot password?
                  </span>
                </div>
              </div>
               
              <form onSubmit={handleLogin}>
                <div className="relative mx-12">
                <button
                  type="submit"
                  className="w-full bg-orange-300 from-blue-400 to-cyan-300 text-black font-semibold py-2 mx-0 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <CgLogIn className="text-xl" />
                  Login
                </button>
                </div>

                <div className="text-sm text-center pt-4">
                  <p className="text-gray-400">──────────  or connect with ──────────</p>
                </div>
                <div class= "pt-6 mx-12">
                <button
                  type="button"
                  className="w-full bg-white text-black py-2  mx-2 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <FcGoogle className="text-2xl bg-white rounded-full w-4 font-semibold" />
                  Sign In with Google
                </button>
                </div>
                {isLoggedIn &&(
                  <p className="text-green-400 text-center mt-2">succesfuly logged in Account
                  </p>
                )}

                <div className="w-full pt-4 text-sm mx-20">
                  <p className="text-sm">
                    By clicking continue you agree to our Terms of service and privacy policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailInput;