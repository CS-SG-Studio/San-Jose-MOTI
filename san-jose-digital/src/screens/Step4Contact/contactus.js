import "./contactus.css";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <p>
        Are you looking for funding, mentorship, collaboration, and volunteering
        <br />
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
      <form id="contact-form" noValidate>
        {/* Row 1 of form */}
        <p className="text">
          Questions or comments? We’d love to hear from you! <br /> Fill out the
          form below to get in touch with our Program Director, Charlene Tatis!
        </p>
        <div className="row formRow">
          <div className="col-6">
            <input
              type="email"
              name="name"
              className="form-control formInput"
              placeholder="Name"
            ></input>
          </div>
          <div className="col-6">
            <input
              type="email"
              name="email"
              className="form-control formInput"
              placeholder="Email address"
            ></input>
          </div>
          <div className="col-6">
            <input
              type="number"
              name="Phone Number"
              className="form-control formInput"
              placeholder="Phone number"
            ></input>
          </div>
        </div>
        {/* Row 2 of form */}
        <div className="row formRow">
          <div className="col">
            <input
              type="text"
              name="subject"
              className="form-control formInput"
              placeholder="Subject"
            ></input>
          </div>
        </div>
        {/* Row 3 of form */}
        <div className="row formRow">
          <div className="col">
            <textarea
              rows={5}
              name="message"
              className="form-control formInput"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <h1>Thank you!</h1>
      </form>
      {/* TODO: add a "Thank you for contacting us!" page that will appear after they click submit */}
      {/* TODO: connect this to SJDIF email */}
    </div>
  );
};

export default ContactForm;
