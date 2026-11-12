import React from "react";
import { useState } from "react";
import shop from "../../assets/neighborhood-shop.png";
import brandLogo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const userName = "Oluwabukola";
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

      <div className="flex-1 bg-[#f3f9ffea] text-[#252d27] flex flex-col justify-center items-center min-h-screen p-6 relative text-[14px]">
        <div className="md:hidden flex items-center gap-1 absolute top-15 left-10">
          <img src={brandLogo} alt="logo-img" className="bg-primary h-6" />
          <h2 className="text-[18px]">Stockbook</h2>
        </div>

        <p className="hidden lg:flex justify-end text-[14px] mb-6 absolute top-14 right-10">
          Built for neighborhood businesses in Nigeria.
        </p>
        <form
          className="flex flex-col g-2 w-full max-w-sm"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-0.5">
            <h1 className="flex text-[22px] md:text-[24px] gap-1.5 flex-wrap font-black">
              <span>Welcome back, </span>
              <span>{userName}!</span>
            </h1>
            <p className="text-[#70776e] text-[15px]">
              Sign in and get your shop ready for the day.
            </p>
          </div>

          <label className="mt-3 flex flex-col gap-1">
            <p>Phone number</p>
            <div>
              <input
                type="text"
                placeholder="e.g 08100002300"
                className="border border-[#e3e6de] rounded-[10px] bg-[#ffffff] py-1.5 px-2 items-center w-full placeholder:text-[12px] cursor-pointer"
              />
            </div>
          </label>

          <label className="mt-3 flex flex-col gap-1">
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
            </div>
          </label>

          <div className="flex items-center justify-between mt-6">
            <span className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={remember}
                onClick={(e) => setRemember(e.target.checked)}
                className="cursor-pointer"
              />
              <p>Keep me signed in.</p>
            </span>
            <button className="text-primary font-black cursor-pointer hover:text-gray-500">
              Forgot password?
            </button>
          </div>

          <button className="mt-6 border border-primary bg-primary rounded-[10px] text-white font-bold text-center p-2 cursor-pointer">
            Sign in
          </button>

          <p className="flex justify-center items-center gap-1 mt-3">
            New to Stockbook?{" "}
            <button className="cursor-pointer text-primary font-bold hover:text-gray-500">
              Create account
            </button>
          </p>

          <p className="bg-[#eaf3ec] text-primary text-[13px] font-light mt-6 border-0.8 border-primary rounded-[10px] py-2 px-2.5">
            Less paperwork. More time for your customers.
          </p>
        </form>

        <p className="mt-8 text-center">
          Need a help?{" "}
          <span className="text-primary cursor-pointer font-normal hover:text-gray-500">
            Contact Stockbook support.
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
