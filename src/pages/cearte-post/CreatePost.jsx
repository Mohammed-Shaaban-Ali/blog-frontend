import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { creatPost } from "../../redux/apicalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
import { getcategories } from "../../redux/apicalls/categoruApiCall";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigae = useNavigate();
  const { lodding, isPostCreated } = useSelector((state) => state.posts);
  const { categories } = useSelector((state) => state.categories);

  const [titel, settitel] = useState("");
  const [category, setcategory] = useState("");
  const [descrption, setdescrption] = useState("");
  const [file, setFile] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (titel.trim() === "") return toast.error("Post titel is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (descrption.trim() === "")
      return toast.error("Post descrption is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("titel", titel);
    formData.append("descrption", descrption);
    formData.append("category", category);

    dispatch(creatPost(formData));
  };
  useEffect(() => {
    if (isPostCreated) {
      navigae("/");
    }
  }, [isPostCreated, navigae]);

  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);

  return (
    <section className="create-post">
      {lodding ? (
        <RotatingLines
          strokeColor="blue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <>
          <h1 className="create-post-titel"> Create New Post</h1>
          <form onSubmit={handelSubmit} className="create-post-form">
            <input
              type="text"
              placeholder="Post titel"
              className="create-post-input form-children"
              value={titel}
              onChange={(e) => settitel(e.target.value)}
            />

            <select
              type="text"
              className="create-post-input form-children"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option value="" disabled>
                Select A category
              </option>
              {categories?.map((category) => (
                <option key={category} value={category.titel}>
                  {category.title}
                </option>
              ))}
            </select>
            <textarea
              value={descrption}
              onChange={(e) => setdescrption(e.target.value)}
              rows="7"
              className="create-post-textatea form-children"
              placeholder="Post descrption"
            ></textarea>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="file"
              id="file"
              className="create-post-upload form-children"
            />

            <button type="submit" className="btn">
              Create
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default CreatePost;
