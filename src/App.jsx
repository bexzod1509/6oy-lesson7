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
import Product from "./pages/products/Product";
import Singleroute from "./pages/singleroute/Singleroute";
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
        <Route path="/cards" element={<Product />} />
        <Route path="/product/:id" element={<Singleroute />} />
      </Routes>
      <Latest />
      <Footer />
    </>
  );
}

export default App;
