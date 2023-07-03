import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import PostsPage from "./pages/post-page/PostsPage";
import AdminDashborad from "./pages/admin/AdminDashborad";
import CreatePost from "./pages/cearte-post/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/create-post" element={<CreatePost />} />
        <Route path="/admin-dashboard" element={<AdminDashborad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
