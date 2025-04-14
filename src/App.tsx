import HomePlant from './Pages/HomePlant'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<HomePlant />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App
