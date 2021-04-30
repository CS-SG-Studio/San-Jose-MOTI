function Questionnaire() {
  return (
    <>
      <header> QUESTIONNAIRE </header>
      <p>
        Fill out the following questionnaire to get matched with grantee
        organization(s).
      </p>
      <container>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName"> Name : </label>
            <input type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="form-control">
            <label htmlFor="email"> E-Mail : </label>
            <input type="email" id="email" name="firstName"></input>
          </div>
          <div className="form-control">
            <label htmlFor="phone"> Phone : </label>
            <input type="number" id="phone" name="phone"></input>
          </div>
        </form>
      </container>
      <div>
        <button type="submit">NEXT</button>
      </div>
    </>
  );
}

export default Questionnaire;
