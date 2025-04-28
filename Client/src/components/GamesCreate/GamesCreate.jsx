import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import {create} from '../../services/gameService.js';

export default function GamesCreate() {
    const navigate = useNavigate();
    
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;

        setGame(prevState => ({
            ...prevState,
            [name]: name === 'maxLevel' ? Number(value) : value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        
        try{
            await create(game);

            setGame({
                title: '',
                category: '',
                maxLevel: '',
                imageUrl: '',
                summary: ''
            });

            navigate('/games');
        }catch(err) {
            console.log(err);
        }
    }

    return(
        <section id="create-page" className="auth">
        <form id="create" onSubmit={submitHandler}>
            <div className="container">

                <h1>Create Game</h1>
                <label htmlFor="title">Legendary title:</label>
                <input type="text" id="title" name="title" value={game.title} onChange={changeHandler} placeholder="Enter game title..." />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={game.category} onChange={changeHandler} placeholder="Enter game category..." />

                <label htmlFor="maxLevel">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value={game.maxLevel} onChange={changeHandler} placeholder="1" />

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={changeHandler} placeholder="Upload a photo..." />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary" value={game.summary} onChange={changeHandler}></textarea>
                <input className="btn submit" type="submit" value="Create Game" />
            </div>
        </form>
    </section>
    );
}