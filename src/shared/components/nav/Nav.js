import React, { Component } from 'react'
import Header from '../common/Header'

class Nav extends Component {
  render() {
    return (
      <ul className="nav nav-main">
        <li><a href="/">Home</a></li>
        <li><a href="/newresource">NewResource</a></li>
        <li><a href="/newresource/new">NewResource New</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    )
  }
}

export default Nav
