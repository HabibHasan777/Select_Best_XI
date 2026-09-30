import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Selected_Player = ({ selected_player, removeSelectedPlayer }) => {
  const { name, battingType, image } = selected_player;
  return (
    <div className="shadow-sm px-4 py-2 rounded-2xl flex justify-between">
      <div className="flex items-center gap-4">
        <img className="h-[80px] w-[80px]" src={image} alt="" />
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-[16px] text-gray-600">{battingType}</p>
        </div>
      </div>
      <button
        onClick={() => {
          removeSelectedPlayer(selected_player.playerId);
        }}
        className="text-2xl"
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default Selected_Player;
