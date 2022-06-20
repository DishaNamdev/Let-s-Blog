import React from "react";
import "./post.css";
import postImg from "../../images/postImg.jpeg";
import {Link} from 'react-router-dom';

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={postImg} alt="post1" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
               Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDesc">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus
        ipsa ad earum corrupti illum doloremque in, vel quasi explicabo vitae
        distinctio optio odit, maxime laudantium animi atque ab quisquam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus
        ipsa ad earum corrupti illum doloremque in, vel quasi explicabo vitae
        distinctio optio odit, maxime laudantium animi atque ab quisquam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus
        ipsa ad earum corrupti illum doloremque in, vel quasi explicabo vitae
        distinctio optio odit, maxime laudantium animi atque ab quisquam?
      </p>
    </div>
  );
}
