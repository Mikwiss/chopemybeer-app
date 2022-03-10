import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketScreen from "./BasketScreen";
import HomeScreen from "./HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/basket" element={<BasketScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
