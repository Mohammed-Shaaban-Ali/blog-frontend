import React, { useEffect } from "react";
import { useParams } from "react-router";
import PostList from "../../components/posts/PostList";
import { useDispatch, useSelector } from "react-redux";

import "./Category.css";
import { fatechPostscategory } from "../../redux/apicalls/postApiCall";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const Category = () => {
  const dispatch = useDispatch();
  const { postCate } = useSelector((state) => state.posts);
  const [loding, setLoding] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    async function fatech() {
      await dispatch(fatechPostscategory(category));
      window.scrollTo(0, 0);
      setLoding(false);
    }
    fatech();
  }, [category, dispatch]);
  return (
    <section className="category">
      {loding ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
          {postCate.length === 0 && (
            <div className="not-found">
              <h1 className="not-found-title">
                Post with <span>{category}</span> category not found
              </h1>
              <Link className="linl" to="/posts">
                Go To Posts page
              </Link>
            </div>
          )}
          {postCate.length !== 0 && (
            <>
              <h1 className="category-title">Posts based on {category}</h1>
              <div className="posts-center">
                <PostList posts={postCate} />
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Category;
