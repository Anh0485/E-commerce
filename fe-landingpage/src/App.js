import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <Routes>
      {/* <Header /> */}
      {/* <Route path="" Component={Header} /> */}
      <Route path="/" Component={HomeScreen} exact />
      <Route path="/login" Component={LoginScreen} />
      {/* <LoginScreen /> */}
    </Routes>



  );
}

export default App;
