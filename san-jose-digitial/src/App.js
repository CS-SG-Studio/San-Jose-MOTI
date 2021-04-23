import './App.css';

function App() {
  return (
    <>
      <article>
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
          <div className="form-control">
            <label htmlFor="contact"> I am filling this on behalf of : </label>
            <div>
              <input type="radio" id="self" name="self"></input>
              <label for="self">Myself</label>
            </div>
            <div>
              <label htmlFor="other">Other (please specify) </label>
              <input type="text" id="other" name="other"></input>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="contact"> What is your primary language : </label>
            <div>
              <input type="radio" id="english" name="english"></input>
              <label for="english"> English </label>
            </div>
            <div>
              <input type="radio" id="spanish" name="spanish"></input>
              <label for="spanish">Spanish</label>
            </div>
            <div>
              <input type="radio" id="vietnamese" name="vietnamese"></input>
              <label for="vietnamese">Viatnamese</label>
            </div>
            <div>
              <label htmlFor="other">Other (please elaborate) </label>
              <input type="text" id="other" name="other"></input>
            </div>
          </div>
        </form>
        <button type="submit">NEXT</button>
      </article>
    </>
  );
}

export default App;
