import "./App.css";
import { Items } from "./components/Items";
import Africa from "./components/subnavbarConp/Africa";
import Bars from "./components/subnavbarConp/Bars";
import Cultures from "./components/subnavbarConp/Cultures";
import Layout from "./components/subnavbarConp/Layout";
import Memes from "./components/subnavbarConp/Memes";
import Politics from "./components/subnavbarConp/Politics";
import Navbar from "./pages/Navbar";
import "./styles/subNavbar.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Britain from "./components/worldsElemnts/Britain";
import France from "./components/worldsElemnts/France";
import India from "./components/worldsElemnts/India";
import Rusia from "./components/worldsElemnts/Rusia";
import Worlds from "./pages/Worlds";

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
      <Items />
      <div className="world-layouts">
        <BrowserRouter>
          <Worlds />
          <Routes>
            <Route path="/britain" element={<Britain />} />
            <Route path="/india/" element={<India />} />
            <Route path="/france" element={<France />} />
            <Route path="/rusia" element={<Rusia />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
