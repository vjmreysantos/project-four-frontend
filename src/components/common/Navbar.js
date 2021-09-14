import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../lib/auth'

function Navbar() {
  const isAuth = isAuthenticated()
  const { pathname } = useLocation()
  const history = useHistory()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }


  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" width="30"/>
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/jordans/" className="navbar-item">
              Kicks
            </Link>
            <Link to="/auth/users/" className="navbar-item">
              Ballers
            </Link>
            {isAuth && (
              <>
                <Link to="/jordans/new/" className="navbar-item">
                Add a Jordan
                </Link>
                <Link to="/auth/myprofile/" className="navbar-item">
                My Profile
                </Link>
              </>
            )}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth && (
                  <>
                    <Link to="/auth/register/" className="button is-danger">
                      Register
                    </Link>
                    <Link to="/auth/login/" className="button is-danger">
                      Login
                    </Link>
                  </>
                )}
                {isAuth && (
                  <button className="button is-danger" onClick={handleLogout}>Log Out</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar