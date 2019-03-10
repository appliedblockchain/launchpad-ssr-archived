import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../nav/Nav'

class Header extends Component {
  static async getInitialProps({ ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="stylesheet" href="/style.css" />
        </Helmet>
        <a href="/">
          <div className="header">
            <img src="/img/react.svg" className="logo" alt="logo" />
            <h2>Welcome to AB</h2>
          </div>
        </a>
        <Nav />
      </div>
    )
  }
}

export default Header
