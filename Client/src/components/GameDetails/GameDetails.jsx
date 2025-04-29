import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import * as gameService from '../../services/gameService.js';

export default function GameDetails() {
    const {id} = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
         gameService.getSingleGame(id)
        .then(setGame)
        .catch(err => console.log(err));
    }, [id]);

    return(
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>
        </section>
    )
}