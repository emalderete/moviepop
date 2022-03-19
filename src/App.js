import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
