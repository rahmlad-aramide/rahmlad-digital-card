import React from "react";
import image from "../images/react-logo.png";

function Navbar(){
    return(
      <header>
        <nav className="navbar">
        <div className="brand">
        <img className="logo" src={image} alt="Logo" />
        <h2 className="brandName">ReactFacts</h2>

        </div>
         <div>
         <h3 className="title">React Course - Project 1</h3>
         </div>
        </nav>
      </header>
    )
  }

export default Navbar