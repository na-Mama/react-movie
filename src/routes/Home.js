import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const menuItems = [
    {
      id: 1,
      title: "영화 목록",
      path: "/MovieList",
      description: "인기 영화들을 확인해보세요",
    },
    {
      id: 2,
      title: "영화 상세",
      path: "/detail/1",
      description: "영화의 자세한 정보를 보세요",
    },
    {
      id: 3,
      title: "검색",
      path: "/search",
      description: "원하는 영화를 찾아보세요",
    },
    {
      id: 4,
      title: "즐겨찾기",
      path: "/favorites",
      description: "내가 좋아하는 영화들",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        🎬 React Movie App
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#e3f2fd";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f9f9f9";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px 0",
                  color: "#1976d2",
                  fontSize: "1.2em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: "0",
                  color: "#666",
                  fontSize: "0.9em",
                  lineHeight: "1.4",
                }}
              >
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        <p style={{ margin: "0", color: "#666" }}>
          다양한 영화 정보를 확인하고 즐겨보세요! 🍿
        </p>
      </div>
    </div>
  );
}

export default Home;
