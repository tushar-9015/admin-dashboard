import React, { useContext, useState } from 'react';
import './login.scss'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {authDispatch} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        authDispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login
