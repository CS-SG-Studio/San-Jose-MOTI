import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Our Programs</h1>
        <h2>You will gain access to job, education, 
          healthcare, and service opportuntites!<br/>
        The following are included in our bundle package:
        </h2>
      </div>
      <div>
        <div>
          <h2>ACCESS PROGRAMS</h2>
          <img src="./light_blue_circle.jpg" alt="background"/>
          <h3>Get information on <br/>a low-cost internet <br/>package!</h3>
        </div>
      </div>
      <h4>Access to devices are not guarenteed. We oeprate on a first-come first-serve basis.</h4>
    </div>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
