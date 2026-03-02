import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { CgLogIn } from "react-icons/cg";
<<<<<<< HEAD
import ThemeToggle from "./ThemeToggle";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setError("");
    setIsLoggedIn(true);

    setTimeout(() => {
      setIsLoggedIn(false);
      setEmail("");
      setPassword("");
=======

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
>>>>>>> 7873a7555f2aca079ac8dd414085491d136329e5
    }, 3000);
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 dark:bg-black transition-colors duration-500 relative">

      <div className="absolute top-4 right-4 md:top-6 md:right-6 xl:top-4 xl:right-8 z-50">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen shadow-2xl">

       
        <div className="hidden md:block">
          <img
            src="/images/image.jpg"
            alt="Login visual"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-20 space-y-6 bg-white dark:bg-black overflow-y-auto">

          
          <div className="w-full flex justify-end text-xs sm:text-sm md:text-base px-12 pt-6">
            <button
              type="button"
              className="dark:text-orange-400 text-black font-semibold hover:underline"
              onClick={() => alert("Sign up clicked")}
            >
              Sign up
            </button>
          </div>

         
          <div className="flex justify-center">
            <img
              src="/images/image.png"
              alt="Logo"
              className="w-28 h-28 object-contain"
            />
          </div>

       
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-black">
              Login to your Account
            </h3>
            <p className="text-sm dark:text-gray-400 text-gray-600">
              Enter your details below to proceed
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">

          
            <div>
              <label className="block mb-1 dark:text-white text-black">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

           
            <div>
              <label className="block mb-1 dark:text-white text-black">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />

              <div className="flex justify-end mt-2 text-sm">
                <button
                  type="button"
                  className="text-orange-400 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-neutral-800 dark:bg-orange-400 text-white dark:text-black font-semibold py-2 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition duration-300"
            >
              <CgLogIn className="text-xl" />
              Login
            </button>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-gray-300 dark:border-neutral-700"></div>
            <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
              or connect with
            </span>
            <div className="flex-1 border-t border-gray-300 dark:border-neutral-700"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full font-semibold bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white border border-neutral-400 dark:border-neutral-600 py-2 rounded-3xl flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            <FcGoogle className="text-2xl bg-white rounded-full w-8 h-8" />
            Sign In with Google
          </button>

          {isLoggedIn && (
            <p className="text-green-500 text-center font-medium">
              Successfully logged in!
            </p>
          )}

          <p className="text-xs text-center text-neutral-600 dark:text-neutral-400">
            By clicking continue you agree to our Terms of Service and Privacy Policy
          </p>

=======
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
>>>>>>> 7873a7555f2aca079ac8dd414085491d136329e5
        </div>
      </div>
    </div>
  );
}

export default EmailInput;