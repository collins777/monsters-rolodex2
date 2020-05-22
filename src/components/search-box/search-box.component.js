import React from "react";
import "./search-box.styles.css";

// functional components do not have access to state nor lifecycle methods
// which is part of the contructor method found on the class component

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
