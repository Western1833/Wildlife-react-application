import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function GameListItem ({
    title,
    category,
    imageUrl,
    id
}){
    return(
        <div className="allGames">
                <div className="allGames-info">
                    <img src={imageUrl}/>
                    <h6>{category}</h6>
                    <h2>{title}</h2>
                    <Link to={`/games/${id}/details`} className="details-button">Details</Link>
                </div>
        </div>
    );
}

GameListItem.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};