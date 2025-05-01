import { useEffect, useState } from "react";
import { HomeGameCard } from "./homeGameCard.jsx";
import * as gameService from '../../services/gameService.js';

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getLatestThree()
        .then(res => setGames(res))
        .catch(err => console.log(err));
    }, []);

    return(
        <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero"/>

        <div id="home-page">
            <h1>Latest Games</h1>
        {games ? (
            games.map(game => <HomeGameCard key={game.id} {...game}/>)
        ):
            <p className="no-articles">No games yet</p>
        }
        </div>
    </section>
    );
}