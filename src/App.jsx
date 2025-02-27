import './styles.css';
import Land from './pages/Land';
import Explore from './pages/Explore';
import {BrowserRouter, Route, Routes} from 'react-router';
import SinglePost from './comps/SinglePost';
import { useState, useEffect } from "react";
import axios from 'axios'
import Contact from './pages/contact';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://3mr9.github.io/JSONs-/menu.json")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching menu:", error));
  }, []);


  return (
   <div className="container-fluid" style={{textAlign: 'right', fontFamily: 'Rubik',}}>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Land />} />
        <Route exact path="/Explore" element={<Explore />} />
        <Route exact path="/post/:id" element={<SinglePost posts={posts}/>} />
        <Route exact path="/Contact" element={<Contact/>} />
 
      </Routes>
     </BrowserRouter>
   </div>
  )
}
export default App;