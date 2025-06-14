import React from "react";
import { useParams } from "react-router-dom";
import { filterPostsByCategory } from "../components/utils";
import { Link } from "react-router-dom";
import "../css/Category.css";

const Category = ({ posts }) => {
  const { category } = useParams();
  const filteredPosts = filterPostsByCategory(posts, category);

  return (
    <div className="category">
      <h2>{category}</h2>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <div className="category-post">
                <h3>{post.title}</h3>
                <p className="category-date">{post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
