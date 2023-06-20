import { useContext } from "react";

import { Link } from "react-router-dom";
import  classes from './MainNavigation.module.css'

import FavoritesContext from "../../store/Favorite-context";

function MainNavigations() {

    const favoritesCtx = useContext(FavoritesContext);
    return (<header className={classes.header}>
        <div className={classes.logo}> React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups Page</Link>
                </li>
                <li>
                    <Link to='/new-meet-up'>New Meetups Page</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites Page
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigations;