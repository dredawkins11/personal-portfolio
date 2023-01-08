import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./About.scss";

const About = () => {
    return (
        <section className="about-section">
            <h1>About</h1>
            <p>
                Hi! I am a full-stack web developer here to bring your ideas to
                fruition. I have a knack for coming up with creative solutions
                to any problem you may be faced with. Working with me is easy
                and I can assure you I will exceed your expectations!
            </p>
            <div className="social-link-container">
                <a className="social-link" href="#">
                    <BsGithub />
                </a>
                <a className="social-link" href="#">
                    <BsLinkedin />
                </a>
                <a className="social-link" href="#">
                    <MdEmail />
                </a>
                <button>Contact</button>
            </div>
        </section>
    );
};
export default About;
