import "./PostsPage.css";
import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import { posts, categories } from "../../dummyData";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect } from "react";

const PostsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="post-page">
        <PostList posts={posts} />
        <Sidebar categories={categories} />
      </div>
      <Pagination />
    </>
  );
};

export default PostsPage;
