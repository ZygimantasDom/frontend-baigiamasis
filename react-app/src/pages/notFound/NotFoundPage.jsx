import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <p>Puslapis nerastas.</p>
      <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
        Grįžti į pagrindinį puslapį
      </a>
    </div>
  );
};

export default NotFoundPage;
