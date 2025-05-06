import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import * as gameService from '../../services/gameService.js';
import AuthContext from "../../contexts/authContext.js";

export default function GameDetails() {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();

    const isCreator = userId === game.creator;

    useEffect(() => {
        gameService.getSingleGame(id)
            .then(setGame)
            .catch(err => console.log(err));
    }, [id]);

    const deleteGameHandler = async (e) => {
        e.preventDefault();

        try {
            await gameService.gameDelete(id);
            navigate('/games');
        } catch (err) {
            console.log(err);
        }
    }

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
                            <a href="javascript:void(0)" className="button" onClick={deleteGameHandler}>Delete</a>
                        </div>
                    )
                }
            </div>
        </section>
    )
}