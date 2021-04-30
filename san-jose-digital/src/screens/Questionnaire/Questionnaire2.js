function Questionnaire2() {
  return (
    <>
      <container>
        <form className="form">
          <div className="form-control">
            <label htmlFor="contact"> I am filling this on behalf of : </label>
            <br />
            <input type="radio" id="contact" name="contact" value="self" />
            <label for="contact">Myself</label>
            <br />
            <input type="radio" id="someone" name="contact" value="someone" />
            <label for="someone">
              Someone else (please specify)
              <input type="text" id="someone" name="contact"></input>
            </label>
          </div>
        </form>
      </container>
      <div>
        <button type="submit">BACK</button>
        <button type="submit">NEXT</button>
      </div>
    </>
  );
}

export default Questionnaire2;
