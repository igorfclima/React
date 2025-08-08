import "./App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import { AlertProvider } from "./contexts/AlertContext"; // <- novo
import NavBar from "./components/NavBar";

function App() {
  return (
    <AlertProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </AlertProvider>
  );
}

export default App;
