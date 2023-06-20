import { useContext } from 'react';
import classes from './MeetupItems.module.css';
import Card from '../../UI/Card';

import FavoritesContext from '../../../store/Favorite-context';

function MeetupItem(props) {

    const favoritesCtx =  useContext(FavoritesContext);

      const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandlers () {
        if (itemIsFavorite)  {
                favoritesCtx.removeFavorite(props.id)
        }else {
            favoritesCtx.addFavorite({
                id: props.id,
                tital: props.tital,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
      
    };

    return <li className={classes.items}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.tital}/> 
        </div>
        <div className={classes.content}>
            <h3>{props.tital}</h3>
            <address>{props.address}</address>
            <p>props.description</p>
        </div>
        <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandlers}>
            {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites' }</button>
        </div>
        </Card>
    </li>
}


    export default MeetupItem;