import React from "react";
import { useParams } from "react-router";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";
import "./Category.css";

const Category = () => {
  const { category } = useParams();
  return (
    <section className="category">
      <h1 className="category-title">Posts based on {category}</h1>
      <div className="posts-center">
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default Category;
