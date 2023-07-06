import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/shared/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/shared/Footer/Footer';
import ProductList from './pages/ProductList/ProductList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/all" element={<ProductList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
