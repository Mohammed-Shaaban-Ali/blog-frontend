import "./Admin.css";
import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";

const AdminDashborad = () => {
  return (
    <section className="admin-dashboard">
      <AdminSidebar />
      <AdminMain />
    </section>
  );
};

export default AdminDashborad;
