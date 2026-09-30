import React from "react";
import Selected_Player from "../Selected_Player/Selected_Player";
const Selected_Players = ({
  setShow,
  selected_players,
  removeSelectedPlayer,
}) => {
  return (
    <div className="pb-72 space-y-8">
      <div className="flex justify-between mt-12">
        <h1 className="text-3xl font-bold">Available Players</h1>
        <div className="flex">
          <button
            onClick={() => setShow(true)}
            className=" bg-white text-gray-600 px-4 py-2 rounded-l-xl"
          >
            Available
          </button>
          <button className="bg-[#E7FE29] text-black text-[16px] px-4 py-2 rounded-r-xl">
            Selected {selected_players.length}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {selected_players.map((selected_player) => (
          <Selected_Player
            removeSelectedPlayer={removeSelectedPlayer}
            selected_player={selected_player}
          ></Selected_Player>
        ))}
      </div>
      <div className="border border-black p-2 rounded-3xl w-fit">
        <button
          onClick={() => setShow(true)}
          className="bg-[#E7FE29] text-black text-[16px] px-4 py-2 rounded-2xl"
        >
          Add More Players
        </button>
      </div>
    </div>
  );
};

export default Selected_Players;
