import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';
import GamesCatalogue from "./components/GameCatalogue/GamesCatalogue.jsx";
import GamesCreate from "./components/GamesCreate/GamesCreate.jsx";

function App() {
  return (
    <div id="box">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<GamesCatalogue/>} />
        <Route path="/games/create" element={<GamesCreate/>} />
      </Routes>
    </div>
  );
}

export default App;
