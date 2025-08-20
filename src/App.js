import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
