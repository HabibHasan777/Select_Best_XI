import Header from "../src/components/Header/Header";
import Available_Players from "./components/Available_Players/Available_Players";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="mt-10">
      <header className="max-w-7xl mx-auto">
        <Header></Header>;
      </header>
      <main className="max-w-7xl mx-auto">
        <Available_Players></Available_Players>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
