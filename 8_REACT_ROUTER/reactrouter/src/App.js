import './App.css';

// 1 - CONFIGURANDO ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';

// PAGES
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - LINKs COM REACT ROUTER */}
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - ROTA DINÂMICA */}
            <Route path="/products/:id" element={<Product />} />
            {/* 6 - NESTED ROUTE */}
            <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
