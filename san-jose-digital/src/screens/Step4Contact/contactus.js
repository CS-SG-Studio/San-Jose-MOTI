import React, { useState } from "react";
import "./contactus.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="popup">
      <h3 className="popup-title">Contact Us</h3>
      <p>
       Are you looking for ways to get involved with our digital inclusion
        programs?  
    <br />
        <br />
        <a
          href="https://www.sjdigitalinclusion.org/"
          rel="noreferrer"
          target="_blank"
          className="link"
        >
          VISIT THE SAN JOSÉ DIGITAL INCLUSION FUND WEBSITE!
        </a>
      </p>
      <p>
        You can also fill out the form below to get in touch with our Program Director, Charlene Tatis!
      </p>
      <form id="contact-form" noValidate onSubmit={handleSubmit}>
        {/* Row 1 of form */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control formInput"
            placeholder="Enter name"
            input
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control formInput"
            placeholder="Enter email"
            id="email"
            required
            input
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            name="Phone Number"
            className="form-control formInput"
            placeholder="Enter phone number"
            required
            id="phone"
            input
          />
        </div>
        {/* Row 2 of form */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control formInput"
            placeholder="Enter subject"
            required
            // TODO
            // value={subject}
            // onChange={onSubjectChange}
            input
          />
        </div>
        {/* Row 3 of form */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            rows={5}
            name="message"
            className="form-control formInput"
            placeholder="Message"
            id="message"
            required
          ></textarea>
        </div>
      </form>
      <div>
        <button className="submit-btn" type="submit">
          {status}
        </button>

      </div>
      {/* TODO: add a "Thank you for contacting us!" page that will appear after they click submit */}
      {/* TODO: connect this to SJDIF email */}
    </div>
  );
};

export default ContactForm;
