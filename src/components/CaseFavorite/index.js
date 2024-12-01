import React from "react";
import "./index.css";

function CaseFavorite() {
  const favorites = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Photo",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  return (
    <div className="case-favorite">
      <h3>Case Favorite</h3>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaseFavorite;
