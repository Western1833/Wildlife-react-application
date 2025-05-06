/*eslint-disable*/
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm.js";
import { useState, useEffect } from "react";
import * as gameService from '../../services/gameService.js';

export default function GameEdit() {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const navigate = useNavigate();

    const editGameHandler = async () => {
        try{
            await gameService.gameEdit(id, values);
            navigate(`/games/${id}/details`);
        }catch(err){
            console.log(err);
        }
    };

    const { values, onChange, onSubmit, setValues } = useForm(editGameHandler, {
        title: '',
        category: '',
        maxLevel: '',
        imageurl: '',
        summary: ''
    });

    useEffect(() => {
        gameService.getSingleGame(id)
            .then(gameData => {
                setGame(gameData);
                setValues({
                    title: gameData.title,
                    category: gameData.category,
                    maxLevel: gameData.maxLevel,
                    imageUrl: gameData.imageUrl,
                    summary: gameData.summary
                });
            })
            .catch(err => console.log(err));
    }, [id, setValues]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>

                    <label htmlFor="title">Legendary title:</label>
                    <input type="text" id="title" name="title" onChange={onChange} value={values.title || ''} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" onChange={onChange} value={values.category || ''} />

                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" onChange={onChange} min="1" value={values.maxLevel || ''} />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" onChange={onChange} value={values.imageUrl || ''} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={onChange} value={values.summary || ''}></textarea>

                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    );
}
