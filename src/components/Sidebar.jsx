import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to='/'>
            <i className="mdi mdi-home menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className="nav-link" to='/blank'>
            <i className="mdi mdi-file menu-icon"/>
            <span className="menu-title">Blank</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="mdi mdi-account menu-icon" />
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/samples/login.html">
                  {" "}
                  Login{" "}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/samples/login-2.html">
                  {" "}
                  Login 2{" "}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/samples/register.html">
                  {" "}
                  Register{" "}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/samples/register-2.html">
                  {" "}
                  Register 2{" "}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/samples/lock-screen.html">
                  {" "}
                  Lockscreen{" "}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="documentation/documentation.html">
            <i className="mdi mdi-file-document-box-outline menu-icon" />
            <span className="menu-title">Documentation</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
