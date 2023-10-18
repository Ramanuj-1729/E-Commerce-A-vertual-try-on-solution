import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/shared/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Footer from './components/shared/Footer/Footer';
import ProductList from './pages/ProductList/ProductList';
import Account from './pages/Account/Account';
import Collections from './pages/Collections/Collections';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import AccountPage from './components/AccountPage/AccountPage';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess';
import CheckoutFail from './pages/Checkout/CheckoutFail';
import { useSelector } from 'react-redux';

const App = () => {
  const { isAuth, user } = useSelector(state => state.authSlice);
  // const navigate = useNavigate();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="collections" element={<Collections />} />
        <Route path='collections/all' element={<ProductList />} />
        <Route path='collections/:id' element={<SingleProduct />} />
        {isAuth ?
          <Route path="account" element={<Account />}>
            <Route path={`/account/${user}`} element={<AccountPage />} />
          </Route>
          :
          <Route path="account" element={<Account />}>
            <Route path="login" element={<Login />} />
          </Route>
        }
        <Route path='cart' element={<Cart />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='checkout/success' element={<CheckoutSuccess />} />
        <Route path='checkout/fail' element={<CheckoutFail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
