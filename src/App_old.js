import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// 홈 페이지 컴포넌트
function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>React Movie 앱에 오신 것을 환영합니다!</p>
    </div>
  );
}

// 영화 목록 페이지 컴포넌트
function Movies() {
  return (
    <div>
      <h1>영화 목록</h1>
      <p>여기에 영화 목록이 표시됩니다.</p>
    </div>
  );
}

// 영화 상세 페이지 컴포넌트
function MovieDetail() {
  return (
    <div>
      <h1>영화 상세 정보</h1>
      <p>여기에 영화 상세 정보가 표시됩니다.</p>
    </div>
  );
}

// 네비게이션 컴포넌트
function Navigation() {
  return (
    <nav style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <ul
        style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0 }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            홈
          </Link>
        </li>
        <li>
          <Link to="/movies" style={{ textDecoration: "none", color: "#333" }}>
            영화 목록
          </Link>
        </li>
        <li>
          <Link to="/movie/1" style={{ textDecoration: "none", color: "#333" }}>
            영화 상세
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
