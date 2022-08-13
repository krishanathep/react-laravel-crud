import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Layout({children}) {
  return (
    <div className="container-scroller">
    <Navbar/>
      <div className="container-fluid page-body-wrapper">
        <Sidebar/>
        <div className="main-panel">
        <div className="content-wrapper">
          <main>{children}</main>
        </div>  
          <Footer/>
        </div>
      </div>
    </div>
  );
}
