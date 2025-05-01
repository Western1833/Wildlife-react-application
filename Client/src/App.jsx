import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from 'react-router-dom';
import GamesCatalogue from "./components/GameCatalogue/GamesCatalogue.jsx";
import GamesCreate from "./components/GamesCreate/GamesCreate.jsx";
import Login from "./components/auth/Login/Login.jsx";
import Register from "./components/auth/Register/Register.jsx";
import GameDetails from "./components/GameDetails/GameDetails.jsx";
import {AuthProvider} from "./contexts/authContext.jsx";
import Logout from "./components/auth/Logout.jsx";

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesCatalogue />} />
          <Route path="/games/create" element={<GamesCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/games/:id/details" element={<GameDetails />} />
        </Routes>
      </div>
      </AuthProvider>
  );
}

export default App;
