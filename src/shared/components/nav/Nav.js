import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <ul className="nav nav-main">
        <li><a href="/">Home</a></li>
        <li><a href="/myresource">My Resources</a></li>
        <li><a href="/myresource/new">New Resource</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    )
  }
}

export default Nav
