import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import ResetPass from './Components/ResetPass';
import SecuritySection from './Components/SecuritySection';
import ProjectGuide from './Components/ProjectGuide/ProjectGuide';
import PatentApp from './Components/PatentApplication/PatentApp';
import EnvironmentLand from './Components/Environment/EnvironmentLand';
import MarketAnalysis from './Components/Market/MarketAnalysis';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/password-reset" element={<ResetPass/>} />
          <Route path='/sec' element={<SecuritySection/>} />
          <Route path='/guide-1' element={<ProjectGuide/>} />
          <Route path='/patent-application' element={<PatentApp/>} />
          <Route path='/environment' element={<EnvironmentLand/>} />
          <Route path='/market' element={<MarketAnalysis/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
