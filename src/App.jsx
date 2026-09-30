import { useState } from "react";
import Header from "../src/components/Header/Header";
import Available_Players from "./components/Available_Players/Available_Players";
import Footer from "./components/Footer/Footer";
import Selected_Players from "./components/Selected_Players/Selected_Players";

function App() {
  const [selected_players, setSelectedt_players] = useState([]);
  const [coins, setCoins] = useState(0);
  const addCoins = () => {
    setCoins(coins + 10000000);
  };

  /* toggling */
  const [show, setShow] = useState(true);
  const addSelectedPlayers = (available_player) => {
    const alreadySelected = selected_players.find(
      (player) => player.playerId === available_player.playerId,
    );
    if (alreadySelected) {
      alert("Same player can't be added");
      return;
    }
    const newPlayer = [...selected_players, available_player];
    setSelectedt_players(newPlayer);
    setCoins(coins - available_player.biddingPrice);
  };
  const removeSelectedPlayer = (playerId) => {
    const remainingPlayers = selected_players.filter(
      (player) => player.playerId !== playerId,
    );

    setSelectedt_players(remainingPlayers);
  };
  return (
    <div className="mt-10">
      <header className="max-w-7xl mx-auto">
        <Header coins={coins} addCoins={addCoins}></Header>
      </header>
      <main className="max-w-7xl mx-auto">
        {show ? (
          <Available_Players
            coins={coins}
            selected_players={selected_players}
            setShow={setShow}
            addSelectedPlayers={addSelectedPlayers}
          ></Available_Players>
        ) : (
          <Selected_Players
            removeSelectedPlayer={removeSelectedPlayer}
            selected_players={selected_players}
            setShow={setShow}
          ></Selected_Players>
        )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
