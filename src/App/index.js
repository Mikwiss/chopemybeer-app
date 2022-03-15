import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import BasketScreen from "../BasketScreen";
import HomeScreen from "../HomeScreen";
import BeerScreen from "../BeerScreen";
import theme from "./theme";
import Header from "../Header";
import Beers from "../Beers";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/basket" element={<BasketScreen />} />
          <Route path="/beers/:id" element={<BeerScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
