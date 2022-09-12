import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WihtOutNavbar from './layouts/WihtOutNavbar';
import WithNavbar from './layouts/WithNavbar';
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'

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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
