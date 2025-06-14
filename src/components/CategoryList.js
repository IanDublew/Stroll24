import React from "react";
import { Link } from "react-router-dom";
import "../css/Category.css";
const CategoryList = ({ posts }) => {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <ul class="list">
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
