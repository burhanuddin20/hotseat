import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Login from "./pages/Login";

function App() {

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default App
