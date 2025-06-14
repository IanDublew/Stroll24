import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import blogData from "./data/blog";
import Header from "./components/Header";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import ArticleList from "./components/ArticleList";
import DetailedBlog from "./components/DetailedBlog";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import Category from "./components/Category";
import Home from "./components/Home";
import IndividualWeekendList from './components/IndividualWeekendList';
import IndividualActivityList from './components/IndividualActivityList';
import IndividualSightList from './components/IndividualSightList';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
 
  const { name, about, posts } = blogData;

  return (
    <Router>
      <div className="App">
        <Header name={name} />
        <Navbar />
        <ScrollToTopButton/>
        
        <Routes>
          <Route
            path="/blog"
            element={
              <React.Fragment>
                <About about={about} />
                <ArticleList posts={posts} />
              </React.Fragment>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog/:postId" element={<DetailedBlog />} />
          <Route path="/categories" element={<CategoryList posts={posts} />} />
          <Route path="/category/:category" element={<Category posts={posts} />} />
          <Route path="/event/:id" element={<IndividualWeekendList />} />
          <Route path="/activity/:id" element={<IndividualActivityList />} />
          <Route path="/sight/:id" element={<IndividualSightList />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;