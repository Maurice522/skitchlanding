import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={< Home/>}></Route>
        <Route path="/skitchads" element={< Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
