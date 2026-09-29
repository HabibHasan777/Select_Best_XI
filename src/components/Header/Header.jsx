import React from "react";
import { BsCoin } from "react-icons/bs";
import logoIcon from "../../assets/logo.png";
import banner from "../../assets/bg-shadow.png";
import bannerIcon from "../../assets/banner-main.png";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between mb-10">
        <div className="h-[72px] w-[72px] rounded-full">
          <img className="" src={logoIcon} alt="" />
        </div>
        <div className="flex justify-between gap-8 items-center">
          <div className="text-gray-500 text-[16px]">
            <a href="">Home</a>
          </div>
          <div className="text-gray-500 text-[16px]">
            <a href="">Fixture</a>
          </div>
          <div className="text-gray-500 text-[16px]">
            <a href="">Teams</a>
          </div>
          <div className="text-gray-500 text-[16px]">
            <a href="">Schedules</a>
          </div>
          <div className="flex gap-3 items-center shadow-sm p-3 rounded-xl">
            Coin
            <span>
              <BsCoin />
            </span>
          </div>
        </div>
      </nav>
      {/* banner */}

      <section
        style={{ backgroundImage: `url(${banner})` }}
        className="w-full h-[545px] bg-cover bg-center bg-no-repeat bg-black rounded-4xl md:px-44 md:py-16 px-11 py-4 flex flex-col justify-center items-center gap-5"
      >
        <div>
          <img src={bannerIcon} alt="" />
        </div>
        <h1 className="text-[40px] text-white font-bold text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl text-gray-300">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="rounded-2xl border-2 border-[#dfff00] bg-[#151515] p-2">
          <span className="block rounded-2xl bg-[#dfff00] px-7 py-3 text-[16px] font-bold text-black">
            Claim Free Credit
          </span>
        </button>
      </section>
    </div>
  );
};

export default Header;
