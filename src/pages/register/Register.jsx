import './register.css';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div className='register'>
          <div className="registerTitle">Register</div>
            <form action="" className='registerForm'>
            <label>Username</label>
               <input type="text" className="registerInput" placeholder='Username' />

               <label>Email</label>
               <input type="text" className="registerInput" placeholder='Email' />

               <label>Password</label>
               <input type="password" className="registerInput" placeholder='Password' />
    
               <button className="registerButton">
                   <Link className="link" to="/">Register</Link>
               </button>
               <button className="registerLoginButton">
                    <Link className="link" to="/login">Login</Link>
               </button>
            </form>
        </div>
      );
}
