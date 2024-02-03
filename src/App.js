import "./App.css";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="main-container">
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
