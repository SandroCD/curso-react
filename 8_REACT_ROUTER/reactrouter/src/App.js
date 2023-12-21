import './App.css';

// 1 - CONFIGURANDO ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// PAGES
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - LINKs COM REACT ROUTER */}
        <Navbar />
        {/* 9 - SEARCH/BUSCA */}
        <SearchForm />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - ROTA DINÂMICA */}
            <Route path="/products/:id" element={<Product />} />
            {/* 6 - NESTED ROUTE */}
            <Route path="/products/:id/info" element={<Info />} />
            {/* 9 - SEARCH/BUSCA */}
            <Route path="/search" element={<Search />} />
            {/* 7 - NO MATCH ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
