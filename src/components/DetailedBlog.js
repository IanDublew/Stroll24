import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogData from "../data/blog";
import "../css/DetailedBlog.css";
import BlogFooter from "./BlogFooter";

function DetailedBlog() {
  const { postId } = useParams();
  const post = blogData.posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  const { title, date, preview, category, content, keywords } = post;

  return (
    <div className="detailed-blog-container">
      <Helmet>
        <title>{`${title} - Stroll 24`}</title>
        <meta name="description" content={preview} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <h2 className="blog-title">{title}</h2>
      <div className="blog-metadata">
        <div className="categorytitle">{category}🏷️</div>
        <div className="date">{date}</div>
        <p className="blog-preview">{preview}</p>
      </div>
      {content}
      <BlogFooter />
    </div>
  );
}

export default DetailedBlog;