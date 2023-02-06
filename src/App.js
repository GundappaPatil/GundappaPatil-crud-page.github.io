import "./styles.css";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Data from "./components/Data";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}
