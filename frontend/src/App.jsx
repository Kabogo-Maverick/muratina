import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;

// done
