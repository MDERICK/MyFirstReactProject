import { Routes, Route  } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./component/layout/Layout";

function App() {
  return ( <Layout>
      
     <Routes>
    
    <Route path="/" element={<AllMeetupsPage />}/>

    <Route path="/new-meet-up" element={<NewMeetupsPage />}/>
    
    <Route path="/favorites" element={ <FavoritesPage />}/>
     
 
  </Routes>
  </Layout>
  
 
  )
}

export default App;
