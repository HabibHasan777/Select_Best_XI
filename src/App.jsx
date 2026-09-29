import Header from "../src/components/Header/Header";
import Footer from "./components/Header/Footer/Footer";
function App() {
  return (
    <div className="mt-10">
      <header className="max-w-7xl mx-auto">
        <Header></Header>;
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
