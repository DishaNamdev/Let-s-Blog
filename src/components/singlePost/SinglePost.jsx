import React from "react";
import "./singlepost.css";
import singlePImg from "../../images/postImg.jpeg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={singlePImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Disha</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos possimus exercitationem. Cumque sit cum facere nemo
          tenetur quia quisquam illum, omnis suscipit, quos expedita magnam
          accusamus! Corrupti, dolorem tenetur.
        </p>
      </div>
    </div>
  );
}
