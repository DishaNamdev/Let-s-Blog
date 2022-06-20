import "./Header.css";
import myImage from "../../images/backgroundImg.jpg"
export default function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
           <span className="headerTitleSm"> Blog  </span> 
           <span className="headerTitleLg"> Create Your Own </span>
        </div>
        <img src={myImage} alt="headerImage" className="headerImg" />
    </div> 
  )
}
// span is an inline element