import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
          <h1>Welcome to Portafolio Page</h1>
          <div class="login-box">
            <h2>LOGIN</h2>
              <form>
                <div class="user-box">
                  <input type="text"/>
                  <label>Username</label>
                </div>
                <div class="user-box">
                  <input type="password"/>
                  <label>Password</label>
                </div>
                <a href="/init"><span></span><span></span><span></span><span></span>Submit</a>
              </form>
          </div>
          <Link to="init"><h3>About to....</h3></Link>
          <Link to="contact"><h4>Contacto</h4></Link> 
        </div>
    );
} 
export default Home;