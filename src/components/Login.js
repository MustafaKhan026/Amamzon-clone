import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../firebase";
import "./Login.css";

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = e =>{
      e.preventDefault()

      auth
          .signInWithEmailAndPassword(email, password)
          .then(auth =>{
            history.push('/')
          })
          .catch( err => alert(err.message))

  }
 
  const register = e =>{
      e.preventDefault()
      auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) =>{
              console.log(auth);
              if(auth){
                history.push('/')
              }
          })
          .catch((err)=>{
              alert(err.message)
          })
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail:</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login__signInBtn">Sign in</button>
        </form>
        <p>
          by signing in you agree to amazon fake clone condition of use and
          sale.Please see our privacy notice, our cookies notice and our
          interest based ad notic
        </p>
        <button onClick={register} className="login__registerBtn">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
