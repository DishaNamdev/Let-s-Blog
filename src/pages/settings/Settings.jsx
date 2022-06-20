import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import ProfilePic from "../../images/imag.png";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={ProfilePic} alt="profile picture" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input 
               type="file" 
               id="fileInput"
               style={{display:"none"}} />
          </div>
          <label> Username </label>
          <input type="text" placeholder="Disha" />

          <label> Email </label>
          <input type="email" placeholder="for e.g. disha02@gmail.com" />

          <label> Password </label>
          <input type="password" placeholder="Password" />
          <button className="settingsSubmit">Update</button>
        </form>
        </div>
     <Sidebar/>
    </div>
  );
}
