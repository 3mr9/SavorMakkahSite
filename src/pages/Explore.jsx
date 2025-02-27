import Header from "../comps/Header";
import '../styles.css';
import React, { useState, useEffect } from "react";
import Menu from "../comps/Menu";


function Explore() {
    const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://3mr9.github.io/JSONs-/menu.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data); // Show all posts initially
      })
      .catch(error => console.error("error loading posts:", error));
  }, []);

  // filter posts by category function
  const filterPosts = (category) => {
    if (category === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.cat === category));
    }
  };

  // random post function alert(`Random Post: ${randomPost.nme}`);
  const showRandomPost = () => {
    const randomPost = [Math.floor(Math.random() * posts.length)];
    window.location.href = `/post/${[randomPost]}`;
  };
    
    return(
        <>
        <br />
        <div className="container-fluid">
        <Header />
         <div className="container-fluid" style={{textAlign: 'right'}}>
          <br />
          </div>
          <div className="container-fluid">
      <div className="container-fluid" style={{textAlign: 'center'}}>
        <button className="filterbutt" onClick={() => filterPosts("All")}>الكل</button>
        <button className="filterbutt" onClick={() => filterPosts("وجبات سريعة")}>وجبات سريعة</button>
        <button className="filterbutt" onClick={() => filterPosts("الإفطار")}>الإفطار</button>
        <button className="filterbutt" onClick={() => filterPosts("بيتزا")}>بيتزا</button>
        <button className="filterbutt" onClick={() => filterPosts("مقهى")}>مقهى</button>
        <button className="filterbutt" onClick={() => filterPosts("آسوي")}>آسوي</button>
        <button className="filterbutt" onClick={() => filterPosts("مشاوي")}>مشاوي</button>
        <button className="filterbutt" onClick={() => filterPosts("الأرز")}>الأرز</button>
        <button className="filterbutt" onClick={showRandomPost}>🎲 فاجئني</button>
      </div>
      <div style={{textAlign: 'center'}}>
      <Menu posts={filteredPosts} />
      </div>
    </div>
        </div>
        </>
    );
}

export default Explore;