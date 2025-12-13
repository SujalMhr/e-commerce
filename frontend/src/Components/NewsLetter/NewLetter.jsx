import React from "react";
import "./NewLetter.css";

const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
