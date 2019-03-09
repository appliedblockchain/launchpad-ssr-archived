import React, { Component } from 'react'
import Header from '../common/Header'

class Nav extends Component {
  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/newresource">NewResource Index</a></li>
        <li><a href="/newresource/new">NewResource New</a></li>
        <li><a href="/newresource/1/edit">NewResource Edit (id: 1)</a></li>
        <li><a href="/about">Users+Companies</a></li>
      </ul>
    )
  }
}

export default Nav
