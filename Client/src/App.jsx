import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';
import GamesCatalogue from "./components/GameCatalogue/GamesCatalogue.jsx";
import GamesCreate from "./components/GamesCreate/GamesCreate.jsx";
import Login from "./components/auth/Login/Login.jsx";
import Register from "./components/auth/Register/Register.jsx";
import GameDetails from "./components/GameDetails/GameDetails.jsx";

function App() {
  return (
    <div id="box">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<GamesCatalogue/>} />
        <Route path="/games/create" element={<GamesCreate/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/games/:id/details" element={<GameDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
