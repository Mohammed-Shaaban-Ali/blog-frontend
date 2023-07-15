import "./PostsPage.css";
import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fatechPosts,
  fatechPostsCount,
} from "../../redux/apicalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";

const PostsPage = () => {
  const postsValues = 3;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [loding, setLoding] = useState(true);

  const { post, postCount } = useSelector((state) => state.posts);
  const pages = Math.ceil(postCount / postsValues);

  useEffect(() => {
    async function fatech() {
      window.scrollTo(0, 0);
      await dispatch(fatechPosts(currentPage));
      setLoding(false);
    }
    fatech();
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(fatechPostsCount());
  }, [dispatch]);
  return (
    <section>
      {loding ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
        <div className="post-page">
          <PostList posts={post} />

          <Sidebar />
        </div>
      )}
      {!loding && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
};

export default PostsPage;
