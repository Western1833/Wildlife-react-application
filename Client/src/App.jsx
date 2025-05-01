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
import { useState, useEffect } from "react";
import Logout from "./components/auth/Logout.jsx";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const user = await authService.getCurrentUser(); // Your /me endpoint
        setAuth({
          data: { user },
          token: 'cookie', // You can set a placeholder or skip it
        });
      } catch (err) {
        setAuth({});
      }
    };

    restoreUser();
  }, []);

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    
    setAuth(result);
    navigate('/');
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password, values.passwordConfirm);

    setAuth(result);
    navigate('/login');
  }

  const logoutHandler = () => {
    setAuth({});
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth?.data?.user?.email,
    token: auth?.token,
    isAuthenticated: !!auth?.token,
    userId: auth?.data?.user?._id
  }

  return (
    <AuthContext.Provider value={values}>
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
      </AuthContext.Provider>
  );
}

export default App;
