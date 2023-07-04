import React from "react";
import "./Home.css";
import PostList from "../../components/posts/PostList";

import { posts, categories } from "../../dummyData.js";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home-hero-header">
        <div className="home-hero-header-layout">
          <h1 className="home-title">Welcome to Blog</h1>
        </div>
      </div>

      <div className="home-last-post">Lastest Posts</div>

      <div className="home-containar">
        <PostList posts={posts.slice(0, 3)} />
        <Sidebar categories={categories} />
      </div>
      <div className="home-see-posts-link">
        <Link to="/posts" className="home-link">
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
