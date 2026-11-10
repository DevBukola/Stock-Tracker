import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import shop from "../../assets/neighborhood-shop.png";
import brandLogo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="min-h-screen lg:h-screen lg:overflow-hidden flex text-white">
      {/* LEFT DIV */}
      <div className="hidden lg:flex flex-col gap-2 flex-1 bg-primary p-12">
        <div className="flex items-center gap-2">
          <img src={brandLogo} alt="logo-img" />
          <h2>Stockbook</h2>
        </div>

        <h1 className="sm: text-2xl">Big care for your everyday business</h1>
        <p>
          From the first sale to the last stock count. A simpler day starts with
          StockBook.
        </p>
        <div>
          <img
            src={shop}
            alt="Neighborhood Shop"
            className="w-full h-90 my-2"
          />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCircleCheck} />
          <p className="ml-2">Your records, safely in one place.</p>
        </div>
      </div>

      {/* RIGHT DIV */}

      <div className="flex-1 bg-[#f3f9ffea] text-[#252d27] flex flex-col justify-center items-center min-h-screen p-6 relative text-[13px]">
        <div className="md:hidden flex items-center gap-1 absolute top-4 left-7">
          <img src={brandLogo} alt="logo-img" className="bg-primary h-6" />
          <h2 className="text-[18px]">Stockbook</h2>
        </div>

        <p className="hidden lg:flex justify-end text-[14px] mb-6 absolute top-6 right-10">
          Built for neighborhood businesses in Nigeria.
        </p>
        <form
          className="flex flex-col g-2 w-full max-w-sm"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-0.5">
            <h1 className="flex text-[22px] md:text-[24px] gap-1.5 flex-wrap font-black">
              <span>Your shop, organised.</span>
            </h1>
            <p className="text-[#70776e] text-[15px]">
              Create your free account. Start with the basics.
            </p>
          </div>

          <label className="mt-1 flex flex-col gap-1">
            <p>Your full name</p>
            <div>
              <input
                type="text"
                placeholder="Titalayo Adebayo"
                className="border border-[#e3e6de] rounded-[10px] bg-[#ffffff] py-1.5 px-2 items-center w-full placeholder:text-[12px] cursor-pointer"
              />
            </div>
          </label>

          <label className="mt-1 flex flex-col gap-1">
            <p>Shop name</p>
            <div>
              <input
                type="text"
                placeholder="Titilayo Stores"
                className="border border-[#e3e6de] rounded-[10px] bg-[#ffffff] py-1.5 px-2 items-center w-full placeholder:text-[12px] cursor-pointer"
              />
            </div>
          </label>

          <label className="mt-1 flex flex-col gap-1">
            <p>Phone number</p>
            <div>
              <input
                type="text"
                placeholder="e.g 08100002300"
                className="border border-[#e3e6de] rounded-[10px] bg-[#ffffff] py-1.5 px-2 items-center w-full placeholder:text-[12px] cursor-pointer"
              />
              <p className="text-gray-500 text-[12px]">
                Used to sign in and recover your account.
              </p>
            </div>
          </label>

          <label className="mt-1 flex flex-col gap-1">
            <p>Password</p>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="e.g bnoir@gmail.com"
                className="border border-[#e3e6de] rounded-[10px] bg-[#ffffff] py-1.5 px-2 items-center w-full placeholder:text-[12px] cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-4"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
              <p className="text-gray-500 text-[12px]">Atleast 8 characters.</p>
            </div>
          </label>

          <p className="mt-2">
            By creating an account, you agree to our <Link to="###" className="text-blue-300">Terms of Service and Privacy Policy.</Link>
          </p>

          <button className="mt-3 border border-primary bg-primary rounded-[10px] text-white font-bold text-center p-2 cursor-pointer">
            Create account
          </button>

          <p className="flex justify-center items-center gap-1 mt-2">
            Already have an account?{" "}
            <button className="cursor-pointer text-primary font-bold hover:text-gray-500">
              Sign in
            </button>
          </p>

          <p className="bg-[#eaf3ec] text-primary text-[13px] font-light mt-3 border-0.8 border-primary rounded-[10px] py-2 px-2.5">
            Less paperwork. More time for your customers.
          </p>
        </form>

        <p className="mt-4 text-center">
          Need a help?{" "}
          <span className="text-primary cursor-pointer font-normal hover:text-gray-500">
            Contact Stockbook support.
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
