import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre/index";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
