import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contact-section">
            <h1>Contact</h1>
            <form action="submit">
                <div className="input-container">
                    <input id="name-input" type="text" placeholder="Name" />
                    <input id="email-input" type="text" placeholder="Email" />
                </div>
                <textarea
                    id="message-input"
                    type="text"
                    placeholder="Message"
                />
                <button>Submit</button>
            </form>
        </section>
    );
};
export default Contact;
