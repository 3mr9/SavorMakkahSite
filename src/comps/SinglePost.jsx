import Header from "./Header";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles.css"

const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <a className="n404" href="/Explore">404-Page not found</a>;

  return (
    <>
    <div className="container-fluid">
      <Header />
    </div>
    <br />
    <div className="container-fluid rescon">
      <img src={post.img} className="resimg" />
      <h1 className="restit">{post.nme}</h1>
      <h4>{post.cat}</h4>
      <p>{post.des}</p>
      <Link className="resbutt" to={`${post.loc}`}>اللوكيشين!</Link>
      <Link className="resbutt" to="/Explore">العودة إلى القائمة</Link>
    </div>
    </>
  );
};

export default SinglePost;
