import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import PostsPage from "./pages/post-page/PostsPage";
import AdminDashborad from "./pages/admin/AdminDashborad";
import CreatePost from "./pages/cearte-post/CreatePost";
import Footer from "./components/footer/Footer";
import PostDetailsPage from "./pages/post details/PostDetailsPage";
import { ToastContainer } from "react-toastify";
import Category from "./pages/Category/Category";
import Profile from "./pages/profile/Profile";
import AdminTable from "./pages/admin/admin-table/AdminTable";
import PostTable from "./pages/admin/post table/PostTable";
import CategoryTable from "./pages/admin/category table/CategoryTable";
import CommentsTable from "./pages/admin/comment table/CommentsTable";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="top-right" />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="details/:id" element={<PostDetailsPage />} />
          <Route path="categories/:category" element={<Category />} />
        </Route>
        <Route path="admin-dashboard">
          <Route index element={<AdminDashborad />} />
          <Route path="users-table" element={<AdminTable />} />
          <Route path="posts-table" element={<PostTable />} />
          <Route path="categories-table" element={<CategoryTable />} />
          <Route path="commnts-table" element={<CommentsTable />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
