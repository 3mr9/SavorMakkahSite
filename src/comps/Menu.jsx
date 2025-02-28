import React from "react";
import {Link} from "react-router"
import '../styles.css'
function Menu({ posts }) { 
  
  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);
  
  
  return (
    <>
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        shuffledPosts.map((post) => (
          <div key={post.id} className="container-fluid" style={{width: '18rem',maxHeight:'100%',backgroundColor: 'transparent',borderRadius:'3px',borderColor: 'black', borderWidth: '2px', borderStyle:'solid',overflow:'hidden',display:'inline-block',margin:'3px'}}>
            <img className="img-fluid" src={post.img} alt={post.nme} style={{width: '100%' ,height: '18rem', pointerEvents:'none', objectFit: 'cover'}} onError={(e)=> (e.target.src = "/204.png")} loading="lazy" />
            <div className="container-fluid" style={{margin:'8px'}}>
             <h3>{post.nme}</h3>
             <p>{post.cat}</p><p><i className="MenuTextOverflow">{post.des}</i></p>
             <Link className="linkbutt" to={`/post/${post.id}`}>{post.nme}</Link>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Menu;
