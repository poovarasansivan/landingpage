import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Gallery from "./pages/gallery/gallery";
import Service from "./pages/services/service";
import Wedding from "./pages/listofservice/wedding/wedding";
import Makeup from "./pages/listofservice/Makeup/makeup";
import Photo from "./pages/listofservice/photography/photo";
import Dj from "./pages/listofservice/Dj/dj";
import Gifts from "./pages/listofservice/Gifts/gifts";
import Garland from "./pages/listofservice/Garland/garland";
import Contact from "./pages/contact/contact";
import Vendor from "./pages/vendor/vendor";
import Footer from "./components/footer/footer";
import Review from "./pages/review/review";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/review" element={<Review />} />
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/makeup" element={<Makeup />} />
          <Route path="/services/photo" element={<Photo />} />
          <Route path="/services/entertainment" element={<Dj />} />
          <Route path="/services/returngifts" element={<Gifts />} />
          <Route path="/services/garland" element={<Garland />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
