import React from 'react'
import PropTypes from 'prop-types'

function Nav({ user }) {
  if (!user) {
    return null
  }

  return (
    <ul className="nav nav-main">
      <li><a href="/">Home</a></li>
      <li><a href="/myresource">My Resources</a></li>
      <li><a href="/myresource/new">New Resource</a></li>
      <li><a href="/contract">Contract</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  )
}

Nav.propTypes = {
  user: PropTypes.object
}

export default Nav
