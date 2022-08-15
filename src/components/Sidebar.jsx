import { NavLink as Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <Link className="nav-item" to='/'>
          <a className="nav-link">
            <i className="mdi mdi-home menu-icon" />
            <span className="menu-title">Dashboard</span>
          </a>
        </Link>
        <Link className='nav-item' to='/blank'>
          <a className="nav-link">
            <i className="mdi mdi-file menu-icon"/>
            <span className="menu-title">Blank</span>
          </a>
        </Link>
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
                <a className="nav-link" href="pages/samples/lock-screen.html">
                  {" "}
                  Profiles{" "}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
