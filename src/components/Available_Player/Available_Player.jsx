import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
const Available_Player = ({ available_player, addSelectedPlayers, coins }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPrice,
  } = available_player;
  const alrt = (coins) => {
    if (biddingPrice > coins) {
      alert("insufficient balance");
    } else {
      addSelectedPlayers(available_player);
    }
  };
  return (
    <div className="p-6 rounded-2xl shadow-sm">
      <img
        className="w-full rounded-2xl"
        src={image}
        alt={`image of ${image}`}
      />
      <div className="flex items-center gap-3 mt-2">
        <FaUserCircle />
        <h1 className="font-semibold text-[20px] text-black">{name}</h1>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex text-gray-600 text-[18px] gap-3 items-center ">
          <FaFlag />
          <p>{country}</p>
        </div>
        <div>
          <p>{role}</p>
        </div>
      </div>
      <div className="text-[16px] font-bold text-black mt-4 space-y-2">
        <p>Rating</p>
        <div className="flex justify-between">
          <p>{battingType}</p>
          <p>{bowlingType}</p>
        </div>
        <div className="flex justify-between">
          <p>Price : ${biddingPrice}</p>
          <button
            onClick={() => {
              alrt(coins);
            }}
            className="text-[14px] font-normal shadow-sm p-4 rounded-xl"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Available_Player;
