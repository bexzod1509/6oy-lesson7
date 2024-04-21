import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Latest from "./components/Latestblog/Latest";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Latest />
      <Footer />
    </>
  );
}

export default App;
