import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import * as gameService from '../../services/gameService.js';
import AuthContext from "../../contexts/authContext.js";

export default function GameDetails() {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const { userId } = useContext(AuthContext);

    const isCreator = userId === game.creator;

    useEffect(() => {
        gameService.getSingleGame(id)
            .then(setGame)
            .catch(err => console.log(err));
    }, [id]);

    return (
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

                {
                    isCreator && (
                        <div className="buttons">
                            <Link to={`/games/${game.id}/edit`} className="button">Edit</Link>
                            <Link to={`/games/${game.id}/delete`} className="button">Delete</Link>
                        </div>
                    )
                }
            </div>
        </section>
    )
}