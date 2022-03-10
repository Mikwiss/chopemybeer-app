import logo from "./beer-svgrepo-com.svg";
import "./App.css";
import CountDown from "./Countdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Chope My Beer</p>
        <CountDown initialCount={42} step={-1} />
      </header>
    </div>
  );
}

export default App;
