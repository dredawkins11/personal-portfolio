import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import "./About.scss";

const About = () => {
    return (
        <section className="about-section">
            <h1>about me</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                magni tenetur esse natus voluptate dignissimos veritatis ab
                deleniti blanditiis repudiandae harum provident, delectus
                excepturi minima quaerat voluptatem. Inventore suscipit
                exercitationem, qui a, sit quos odio reiciendis illo, vitae amet
                blanditiis cumque at ea culpa odit. Eos mollitia expedita
                tempora illo?
            </p>
            <div className="social-link-container">
            <a className="social-link" href="#"><BsGithub/></a>
            <a className="social-link" href="#"><BsLinkedin/></a>
            <a className="social-link" href="#"><MdEmail/></a>
            </div>
        </section>
    );
};
export default About;
