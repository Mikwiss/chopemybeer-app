import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import BasketScreen from "../BasketScreen";
import HomeScreen from "../HomeScreen";
import theme from "./theme";

import { Beers } from "../Beers";

import { BeersReviewCard } from "../Beers";
import { Header } from "../Header";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/basket" element={<BasketScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
