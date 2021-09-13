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
            <img src="https://www.seekpng.com/png/detail/70-705495_15-jordan-png-for-free-download-on-mbtskoudsalg.png" />
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
            <Link to="/jordans" className="navbar-item">
              Jordans Gallery
            </Link>
            {isAuth && (
              <Link to="/jordans/new" className="navbar-item">
                Add a Jordan
              </Link>
            )}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth && (
                  <>
                    <Link to="/register" className="button">
                      Register
                    </Link>
                    <Link to="/login" className="button">
                      Login
                    </Link>
                  </>
                )}
                {isAuth && (
                  <button className="button" onClick={handleLogout}>Log Out</button>
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