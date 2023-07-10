import "./PostsPage.css";
import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import { categories } from "../../dummyData";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fatechPosts,
  fatechPostsCount,
} from "../../redux/apicalls/postApiCall";

const PostsPage = () => {
  const postsValues = 3;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { post, postCount } = useSelector((state) => state.posts);
  const pages = Math.ceil(postCount / postsValues);

  useEffect(() => {
    dispatch(fatechPosts(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);
  useEffect(() => {
    dispatch(fatechPostsCount());
  }, []);
  return (
    <>
      <div className="post-page">
        <PostList posts={post} />
        <Sidebar />
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default PostsPage;
