// import React from 'react';
import "./login.css";
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div className='login' style={{backgroundImage: "url(backgroundImageLogin.jpeg)" }}>
      <div className="loginTitle">Login</div>
        <form action="" className='loginForm'>
           <label>Email</label>
           <input type="text" className="loginInput" placeholder='Enter your email' />

           <label>Password</label>
           <input type="password" className="loginInput" placeholder='Enter your password' />

           <button className="loginButton">
             <Link className="link" to="/">Login</Link>
           </button>
           <button className="link loginRegisterButton">
              <Link className="link" to="/register">Register</Link>
           </button>
        </form>
    </div>
  );
}
