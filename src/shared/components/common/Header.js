import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Nav from '../nav/Nav'

const Header = ({ currentUser }) => {
  function loginButton() {
    return (<a className="button btn-small" href="/login">Login</a>)
  }

  function loggedInMessage(_currentUser) {
    return (
      <div>
        <p>Logged in as {_currentUser.email}</p>
        <br />
        <a href="/logout"> Logout</a>
      </div>
    )
  }

  const logoImg = 'ab.jpg'
  const logoImgPath = `/img/${logoImg}`

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      <a href="/">
        <div className="header">
          <div className="header-right right">
            { !currentUser ? loginButton() : loggedInMessage(currentUser) }
          </div>
          <a href="/">
            <img src={logoImgPath} className="logo" alt="logo" />
          </a>
          <h2>Welcome to SSR React</h2>
        </div>
      </a>
      <Nav />
    </div>
  )
}

Header.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string
  })
}

export default Header
