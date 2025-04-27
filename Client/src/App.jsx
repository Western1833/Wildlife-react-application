import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';
import GamesCatalogue from "./components/GameCatalogue/GamesCatalogue.jsx";

function App() {
  return (
    <div id="box">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<GamesCatalogue/>} />
      </Routes>
    </div>
  );
}

export default App;
