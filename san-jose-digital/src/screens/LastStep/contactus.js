import "./contactform.css";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <form id="contact-form" noValidate>
        {/* Row 1 of form */}
        <p>
          Questions? We’d love to hear from you! Get in touch with our Program
          Director, Charlene Tatis, at{" "}
          <a href="info@sjdigitalinclusion.org">info@sjdigitalinclusion.org</a>{" "}
          or send us a message below!
        </p>
        <div className="row formRow">
          <div className="col-6">
            <input
              type="text"
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
    </div>
  );
};

export default ContactForm;
