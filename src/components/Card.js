import React from "react";
import Hero from '../images/hero.jpg';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Facebook from '../images/Facebook Icon.png';
import Twitter from '../images/Twitter Icon.png';
import Instagram from '../images/Instagram Icon.png';
import Github from '../images/GitHub Icon.png';
import './Card.css';

function Card(){
    return(
        <div className="card--container">
            <div className="image--container">
                <img src={ Hero } className="info--image" alt="Hero" />
            </div>
            <div className="texts--container">
                <div className="info--texts">
                    <h3 className="info--name">Abdrahman Oladimeji</h3>
                    <h4 className="info--title">Frontend Developer</h4>
                    <p className="info--website">rahmladwebsite.com</p>
                </div>
                <div className="buttons">
                    <button className="email--button">
                        <img src={ Email } alt="Email" className="email--icon" />
                            <a href="mailto:abdrahmanoladimeji02@gmail.com" className="email--text">Email</a>
                    </button>
                    <button className="linkedin--button">
                        <img src={ Linkedin } alt="Linkedin" className="linkedin--icon" />
                        <a href="https://www.linkedin.com/in/rahmlad" className="linkedin--text" target="_blank" rel="noreferrer">
                        Linkedin
                        </a>
                    </button>
                </div>
                <div className="about">
                    <h4 className="about--head">About</h4>
                    <p className="about--content"> I am a frontend developer with a particular interest in making things simple and automating tasks. I try to keep up with security and best practices, and am always looking forward to learning new things. </p>
                </div>
                <div className="interest">
                <h4 className="interest--head">Interests</h4>
                <p className="interest--content"> Technology. Solving Tech related problems. Academic enthusiast. Internet fanatic. Food lover. </p>
                </div>
            </div>
            <div className="footer">
                <a href="https://twitter.com/AbdrahmanAdeba1">
                    <img src={ Twitter } alt="Twitter Icon" className="footer--icon" href='https://github.com/rahmlad-aramide'/>
                </a>
                <a href="https://web.facebook.com/abdrahman.oladimeji.aramide">
                   <img src={ Facebook } alt="Facebook Icon" className="footer--icon" />      
                </a>
                <a href="https://www.instagram.com/rahmlad/">
                    <img src={ Instagram } alt="Instagram Icon" className="footer--icon" />
                </a>
                <a href="https://github.com/rahmlad-aramide">
                    <img src={ Github } alt="Github Icon" className="footer--icon" />
                </a>
            </div>
        </div>
    )
}


export default Card