import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <div id="contact">
      <form action="">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <div className="form_names">
          <div className="form__text">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form__text">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="form__text">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div className="form__text">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible"
            rows="10"
          ></textarea>
        </div>
        <div id="agree_check_area">
          <input type="checkbox" id="agree_check" />
          <label htmlFor="agree_check">
            You agree to providing your data to &#123;name&#125; who may contact
            you
          </label>
        </div>
        <button id="btn__submit">Send message</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
