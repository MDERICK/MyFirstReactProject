import { useContext } from "react";

import FavoritesContext from "../store/Favorite-context";
import MeetupList from "../component/layout/meetups/Meetuplist";

function FavoritesPage()  {
    const favoritesCtx = useContext(FavoritesContext)
 

    return (<section>

        <h1>My Favorites </h1>
       {favoritesCtx.totalFavorites === 0 ?
        <p>You Got No Favorites Yet. Start Adding Some?</p>:<MeetupList meetups = {favoritesCtx.favorites}/> }
    </section>
    )
};

export default FavoritesPage;
