import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Blank from "./pages/Blank";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exac path="/" element={<Dashboard/>} />
            <Route path="/blank" element={<Blank />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
