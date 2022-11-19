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
      </header>
    </div>
  );
}

export default App;
