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
    <div className="ContactForm">
      <p>
        Are you looking for funding, mentorship, collaboration, and volunteering
        opportunities, or ways to donate to impactful digital inclusion
        programs? <br />
        <br />
        <a
          href="https://www.sjdigitalinclusion.org/"
          rel="noreferrer"
          target="_blank"
          className="link"
        >
          CLICK HERE TO VISIT THE SAN JOSÉ DIGITAL INCLUSION FUND WEBSITE!
        </a>
      </p>
      <form id="contact-form" noValidate onSubmit={handleSubmit}>
        {/* Row 1 of form */}
        <p className="text">
          Questions or comments? We’d love to hear from you! <br /> Fill out the
          form below to get in touch with our Program Director, Charlene Tatis!
        </p>
        <div className="row formRow">
          <div className="col-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control formInput"
              placeholder="Enter name"
            input/>
          </div>
          <div className="col-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control formInput"
              placeholder="Enter email"
              id="email"
              required
            input/>
          </div>
          <div className="col-6">
            <label htmlFor="phone">Phone number</label>
            <input
              type="number"
              name="Phone Number"
              className="form-control formInput"
              placeholder="Enter phone number"
              required
              id="phone" 
              required
            input/>
          </div> 
        </div>
        {/* Row 2 of form */}
        <div className="row formRow">
          <div className="col">
            <label htmlFor="subject">Subject</label>
          <div className="col">
            <input
              type="text"
              name="subject"
              className="form-control formInput"
              placeholder="Enter subject"
              required
              value={subject}
              onChange={onSubjectChange}
            input/>
          </div> 
        </div>
        {/* Row 3 of form */}
        <div className="row formRow">
          <div className="col">
            <label htmlFor="message">Message</label><br/>
            <textarea
              rows={5}
              name="message"
              className="form-control formInput"
              placeholder="Type message"
            ></textarea>
          </div>
        </div>
        <button className="submit-btn" type="submit">
          {status}
        </button>
      </form>
      {/* TODO: add a "Thank you for contacting us!" page that will appear after they click submit */}
      {/* TODO: connect this to SJDIF email */}
    </div>
  );
}

export default ContactForm;
