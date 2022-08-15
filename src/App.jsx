import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WihtOutNavbar from "./router/WihtOutNavbar";
import WithNavbar from "./router/WithNavbar";
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import Blank from './pages/Blank'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WihtOutNavbar/>}>
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route element={<WithNavbar/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/blank" element={<Blank/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
