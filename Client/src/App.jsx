import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route, useNavigate } from 'react-router-dom';
import GamesCatalogue from "./components/GameCatalogue/GamesCatalogue.jsx";
import GamesCreate from "./components/GamesCreate/GamesCreate.jsx";
import Login from "./components/auth/Login/Login.jsx";
import Register from "./components/auth/Register/Register.jsx";
import GameDetails from "./components/GameDetails/GameDetails.jsx";
import AuthContext from "./contexts/authContext.js";
import * as authService from './services/authService.js';
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    
    setAuth(result);
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{loginSubmitHandler, ...auth}}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesCatalogue />} />
          <Route path="/games/create" element={<GamesCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:id/details" element={<GameDetails />} />
        </Routes>
      </div>
      </AuthContext.Provider>
  );
}

export default App;
