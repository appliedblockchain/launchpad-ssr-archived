import React, { Component } from 'react'
import Nav from '../nav/Nav'

class Header extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }
  render() {
    return (
      <div>
        <a href="/">
          <link rel="stylesheet" href="/style.css" />
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

// TODO: setup and use 'react-helmet'
// react-helmet will take care of injecting the <link/> tag and customize the app title to something other than "Welcome to the Afterparty" ^^ - TT
