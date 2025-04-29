import { useEffect, useState} from "react";
import * as gameService from '../../services/gameService.js';
import GameListItem from "./GameListItem/GameListItem.jsx";

export default function GamesCatalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAllGames()
        .then(result => setGames(result))
        .catch(err => console.log(err));
    }, []);

    return(
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ? games.map(game => (
                        <GameListItem key={game.id} {...game}/>
                    )):
                        <h3 className="no-articles">No articles yet</h3>
                }
        </section>
    );
}