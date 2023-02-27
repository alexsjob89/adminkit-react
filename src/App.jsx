import "./App.css";
import Africa from "./components/subnavbarConp/Africa";
import Bars from "./components/subnavbarConp/Bars";
import Cultures from "./components/subnavbarConp/Cultures";
import Layout from "./components/subnavbarConp/Layout";
import Memes from "./components/subnavbarConp/Memes";
import Politics from "./components/subnavbarConp/Politics";
import Navbar from "./pages/Navbar";
import "./styles/subNavbar.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="layouts">
        <Bars />
        <Africa />
        <Cultures />
        <Memes />
        <Politics />
        <Layout />
      </div>
    </div>
  );
}

export default App;
