import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipies from "./pages/Recipies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipies />}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
      </Routes>

      <div className="container main">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
