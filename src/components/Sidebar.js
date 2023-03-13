import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Library Managemet Dashboard
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <Link to="/">
          <li className="nav-item active">
            <div className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard home</span>
            </div>
          </li>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Add books</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <Link to="/add-books">
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              &nbsp;&nbsp;
              <span>Add Books</span>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default Sidebar