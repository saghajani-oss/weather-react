import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Samar Weather App </h1>
        <div className="weather">
          <Weather />
        </div>
        <div className="footer">
          <a
            href="https://github.com/saghajani-oss/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by{" "}
          <a href="https://samiraaghajani.ir/" target="_blank" rel="noreferrer">
            Samira Aghajani
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
