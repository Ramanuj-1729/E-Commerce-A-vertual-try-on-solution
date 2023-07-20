import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/shared/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/shared/Footer/Footer';
import ProductList from './pages/ProductList/ProductList';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';
import Collections from './pages/Collections/Collections';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="collections" element={<Collections />} />
        <Route path='collections/all' element={<ProductList />} />
        <Route path="account" element={<Account />}>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='cart' element={<Cart />} />
        <Route path='wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
