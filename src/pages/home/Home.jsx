import React, { useEffect } from "react";
import "./Home.css";
import PostList from "../../components/posts/PostList";

import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { fatechPosts } from "../../redux/apicalls/postApiCall";

const Home = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fatechPosts(1));
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="home">
      <div className="home-hero-header">
        <div className="home-hero-header-layout">
          <h1 className="home-title">Welcome to Blog</h1>
        </div>
      </div>

      <div className="home-last-post">Lastest Posts</div>

      <div className="home-containar">
        <PostList posts={post} />
        <Sidebar />
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
