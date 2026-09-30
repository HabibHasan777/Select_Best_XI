import { useState } from "react";
import Header from "../src/components/Header/Header";
import Available_Players from "./components/Available_Players/Available_Players";
import Footer from "./components/Footer/Footer";
import Selected_Players from "./components/Selected_Players/Selected_Players";

function App() {
  const [selected_players, setSelectedt_players] = useState([]);
  /* toggling */
  const [show, setShow] = useState(true);
  const addSelectedPlayers = (available_player) => {
    const newPlayer = [...selected_players, available_player];
    setSelectedt_players(newPlayer);
  };
  return (
    <div className="mt-10">
      <header className="max-w-7xl mx-auto">
        <Header></Header>
      </header>
      <main className="max-w-7xl mx-auto">
        {show ? (
          <Available_Players
            selected_players={selected_players}
            setShow={setShow}
            addSelectedPlayers={addSelectedPlayers}
          ></Available_Players>
        ) : (
          <Selected_Players
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
