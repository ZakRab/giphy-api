import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FavPage from "./components/FavPage";
import GifDisplay from "./components/GifDisplay";
import RegisterPage from "./components/RegisterPage";
import SearchPage from "./components/SearchPage";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <Router>
        <Menu className="menu" />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="/gifDisplay" element={<GifDisplay />} />
          <Route path="/favorites" element={<FavPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
