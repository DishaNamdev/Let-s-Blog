import React from "react";
import "./write.css";
import postImage from "../../images/backgroundImg.jpg";

export default function Write() {
  return (
    <div className="write">
      <img 
        className="writeImg" 
        src={postImage} 
        alt="Post Image" 
      />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              className="writeInput"
              autoFocus={true}
              placeholder="Title"
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
  );
}
