import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./routes/MovieList";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MovieList" element={<MovieList />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
