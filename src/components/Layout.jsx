import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
