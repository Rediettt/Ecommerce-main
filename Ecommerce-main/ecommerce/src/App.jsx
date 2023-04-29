import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ShoppingPage from "./pages/ShoppingPage";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState(1)
  return (
    <div className="min-h-screen bg-gray-200 font-outfit">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/shopping" element={<ShoppingPage tab={tab} setTab={setTab}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
