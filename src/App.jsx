import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
