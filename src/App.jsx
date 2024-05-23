import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home';
import Historico from './pages/Historico';
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/historico' element={<Historico/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
