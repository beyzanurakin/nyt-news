import React from "react";
import { useGlobalContext } from "./context";

const Sections = () => {
  const { setSection, buttons } = useGlobalContext();

  return (
    <div className="search-form">
      <h2>New York Times Most Viewed News Today</h2>
      <div className="btn-container">
        {buttons.map((article, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => setSection(article)}
            >
              {article}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sections;
