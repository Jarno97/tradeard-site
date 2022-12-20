import React from 'react';
import Button from './Button';
import './Contact.css'

function Contact() {
  return (
    <div className="contact-overlay">
      <h1>Ward van Gennip</h1>
      <br></br>
      <p>Info@tradeard.com</p>
      <br></br>
      <p>KVK: 85082473</p>
      <br></br>
      <form action="https://formsubmit.co/info@tradeard.com" method="POST">
        <input type="text" placeholder="Your Message" name="name" required></input>
        <input type="email" placeholder="Your Email" name="email" required></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="http://localhost:3000"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact