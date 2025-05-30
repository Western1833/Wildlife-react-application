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
import GameEdit from "./components/GameEdit/GameEdit.jsx";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        setAuth({
          data: { user }
        });
      } catch (err) {
        setAuth({});
      }
    };

    restoreUser();
  }, []);


  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);
      navigate('/');
    } catch (err) {
      setErrorLogin(err.message);
    }
  };


  const registerSubmitHandler = async (values) => {

    try {
      const result = await authService.register(values.email, values.password, values.passwordConfirm);

      setAuth(result);
      navigate('/login');
    } catch (err) {
      setErrorRegister(err.message);
    }
  };

  const logoutHandler = () => {
    setAuth({});
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth?.data?.user?.user?.email || auth?.data?.user?.email, //done as is with || becausue of different server responses, update on server is required
    isAuthenticated: !!auth?.data?.user?.user || auth?.data?.user, //done as is with || becausue of different server responses, update on server is required
    userId: auth?.data?.user?.user?._id || auth?.data?.user?._id //done as is with || becausue of different server responses, update on server is required
  }

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesCatalogue />} />
          <Route path="/games/create" element={<GamesCreate />} />
          <Route path="/login" element={<Login error={errorLogin} />} />
          <Route path="/register" element={<Register error={errorRegister}/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/games/:id/details" element={<GameDetails />} />
          <Route path="/games/:id/edit" element={<GameEdit />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;