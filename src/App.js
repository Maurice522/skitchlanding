
import './App.css';
import Home from './pages/Home';
import Adspage from './pages/Adspage';
// import Footer from './Components/Footer/Footer';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={< Adspage/>}></Route>
        <Route path="/login" element={< Login/>}></Route>
        <Route path="/skitchads" element={< Adspage/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
