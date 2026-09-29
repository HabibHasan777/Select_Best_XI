import React from "react";
import shadowImg from "../../assets/bg-shadow.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A] relative">
      {/* subscribe section */}

      <div className=" absolute -top-52 left-1/2 -translate-x-1/2 border-2 rounded-2xl border-white bg-white/15 p-6 w-7xl mx-auto">
        <div
          style={{ backgroundImage: `url(${shadowImg})` }}
          className="w-full h-[380px] bg-cover bg-center bg-no-repeat bg-white rounded-2xl flex flex-col justify-center items-center gap-5"
        >
          <h1 className="font-bold text-[32px]">Subscribe to our Newsletter</h1>
          <p className="text-[20px] text-gray-700">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <input
              className="bg-white text-[16px] text-gray-500 border rounded-2xl p-4 mr-6 w-[400px]"
              type="text"
              placeholder="Enter your email"
              name=""
              id=""
            />
            <button
              className="
    w-[145px] h-[56px]
    rounded-xl
    bg-gradient-to-r from-pink-400 via-purple-300 to-yellow-400
    text-black
    text-[24px]
    font-bold
  "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* section footer */}
      <section className="flex flex-col justify-center items-center gap-5 pt-64">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h1 className="text-white text-[18px] font-semibold">About Us</h1>
            <p className="text-[16px] text-gray-200">
              We are a passionate team dedicated <br /> to providing the best
              services <br />
              to our customers.
            </p>
          </div>
          <div>
            <h1 className="text-[18px] font-semibold text-white">
              Quick Links
            </h1>
            <ul className="text-[16px] text-gray-200 space-y-2 list-disc">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-white text-[18px] font-bold">Subscribe</h1>
            <p className="text-[16px] text-gray-200">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div
              className="flex
        "
            >
              <div>
                <input
                  className="p-4 rounded-l-2xl bg-white text-[14px] text-gray-500"
                  type="text
            "
                  placeholder="Enter Your Email"
                />
              </div>{" "}
              <button className="bg-gradient-to-r from-pink-400 via-purple-300 to-yellow-400 font-bold text-[16px] rounded-r-2xl p-3.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="py-8 ">
          <p className="text-center text-[16px] text-gray-200">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
