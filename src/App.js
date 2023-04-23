import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import ResetPass from './Components/ResetPass';
import SecuritySection from './Components/SecuritySection';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/password-reset" element={<ResetPass/>} />
          <Route path='/sec' element={<SecuritySection/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
