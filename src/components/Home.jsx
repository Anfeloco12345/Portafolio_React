import React from 'react'
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
          <h1>WELCOME TO PORTAFOLIO PAGE</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <MyButton><Link to="./init">PROJECTS</Link></MyButton>
          <MyButton><Link to="./about">ABOUT</Link></MyButton>
          <MyButton><Link to="./contact">CONTACT</Link></MyButton>
          {/* <Link to="init"><h3>About to....</h3></Link> */}
          {/* <Link to="contact"><h4>Contacto</h4></Link>  */}
        </div>
    );
} 
export default Home;