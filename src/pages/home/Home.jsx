import React, { useEffect, useState } from "react";
import "./Home.css";
import PostList from "../../components/posts/PostList";

import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { fatechPosts } from "../../redux/apicalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  const [lodding, setLodding] = useState(true);

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      await dispatch(fatechPosts(1));
      setLodding(false);
    }
    fetchData();
  }, []);
  return (
    <section className="home">
      <div className="home-hero-header">
        <div className="home-hero-header-layout">
          <h1 className="home-title">Welcome to Blog</h1>
        </div>
      </div>

      <div className="home-last-post">Lastest Posts</div>
      {lodding ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <RotatingLines
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="home-containar">
            <PostList posts={post} />
            <Sidebar />
          </div>
          {post.lenght > 3 && (
            <div className="home-see-posts-link">
              <Link to="/posts" className="home-link">
                See All Posts
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Home;
