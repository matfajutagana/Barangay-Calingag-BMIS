import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      {userInfo ? (
        <nav
          className="main-header navbar navbar-expand navbar-light"
          style={{ backgroundColor: '#90EE90' }}
        >
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <div class="dropdown-menu">
                <Link
                  class="dropdown-item"
                  to="admin/image/6024d751fdb580252cb09c81/edit"
                >
                  Settings
                </Link>
                <Link to={'/'} class="dropdown-item" onClick={logoutHandler}>
                  Logout
                </Link>
                <div class="dropdown-divider"></div>
              </div>
            </li>

            {/* Notifications Dropdown Menu */}

            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        ''
      )}
    </>
  )
}

export default Header
