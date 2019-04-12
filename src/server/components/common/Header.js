import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Nav from '../nav'

const Header = ({ currentUser }) => {
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
            { currentUser && loggedInMessage(currentUser) }
          </div>
          <a href="/">
            <img src={logoImgPath} className="logo" alt="logo" />
          </a>
          <h2>Welcome to SSR React</h2>
        </div>
      </a>
      {currentUser && <Nav user={currentUser} />}
    </div>
  )
}

Header.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string
  })
}

export default Header
