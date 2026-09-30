import React, { useEffect, useState } from "react";
import Available_Player from "../Available_Player/Available_Player";
const Available_Players = ({
  setShow,
  addSelectedPlayers,
  selected_players,
}) => {
  const [available_players, setAvailable_players] = useState([]);

  useEffect(() => {
    fetch("../../../public/players.json")
      .then((res) => res.json())
      .then((data) => setAvailable_players(data));
  }, []);
  return (
    <div className="pb-72">
      <div className="flex justify-between mt-12">
        <h1 className="text-3xl font-bold">Available Players</h1>
        <div className="flex">
          <button className="bg-[#E7FE29] text-[16px] text-black px-4 py-2 rounded-l-xl">
            Available
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-white text-gray-600 text-[16px] px-4 py-2 rounded-r-xl"
          >
            Selected {selected_players.length}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {available_players.map((available_player) => (
          <Available_Player
            addSelectedPlayers={addSelectedPlayers}
            key={available_player.playerId}
            available_player={available_player}
          ></Available_Player>
        ))}
      </div>
    </div>
  );
};

export default Available_Players;
