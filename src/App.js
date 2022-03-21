import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/user' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
