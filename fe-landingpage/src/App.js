import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { Routes, Route } from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
function App() {
  return (
    <Routes>
      {/* <Header /> */}
      {/* <Route path="" Component={Header} /> */}
      <Route path="/" Component={HomeScreen} exact />
      <Route path="/product/:id" Component={ProductScreen} />
      <Route path="/cart/:id?" Component={CartScreen} />
      <Route path="/login" Component={LoginScreen} />
      <Route path="/register" Component={RegisterScreen} />
      <Route path="/profile" Component={ProfileScreen} />
      <Route path="/shipping" Component={ShippingScreen} />


      {/* <LoginScreen /> */}
    </Routes>



  );
}

export default App;
