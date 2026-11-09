import React from "react";
import shop from '../../assets/neighborhood-shop.png'

const LoginPage = () => {
  return (
    <section className="min-h-screen flex text-white">
      <div className="flex flex-col gap-2 flex-1 bg-primary p-12">
        <div className="logo">
          <img src="" alt="logo-img" />
          <h2>Stockbook</h2>
        </div>

        <h1 className="sm: text-2xl">Big care for your everyday business</h1>
        <p>
          From the first sale to the last stock count. A simpler day starts with
          StockBook.
        </p>
        <img src={shop} alt="Neighborhood Shop" className="w-full h-100 my-2"/>
        <p>Your records, safely in one place.</p>
      </div>

      <div className="flex-1">
        <div className="logo">
          <img src="" alt="logo-img" />
          <h2>Stockbook</h2>
        </div>

        <form className="bg-amber-600">
          <div className="flex">
            <h1>
              <span>Welcome back, </span>
            </h1>
            <span>Oluwabukola</span>
          </div>
          <p>Sign in and get your shop ready for the day.</p>

          <label>Phone number</label>
          <input type="text" placeholder="e.g 08100002300" />

          <label>Password</label>
          <input type="text" placeholder="e.g bnoir@gmail.com" className="" />

          <div>
            <span>
              <input type="radio" />
              <p>Keep me signed in.</p>
            </span>
            <button>Forgot password</button>
          </div>

          <button>Sign in</button>

          <p>
            New to Stockbook? <button>Create account</button>
          </p>

          <p>Less paperwork. More time for your customers.</p>
        </form>

        <p>Need a help? Contact Stockbook support.</p>
      </div>
    </section>
  );
};

export default LoginPage;
