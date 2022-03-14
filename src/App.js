import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketScreen from "./BasketScreen";
import HomeScreen from "./HomeScreen";
import logo from "./beer-svgrepo-com.svg";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/basket" element={<BasketScreen />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;
