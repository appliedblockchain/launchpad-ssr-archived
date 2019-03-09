import React, { Component } from 'react'

class Header extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }
  render() {
    // TODO: setup and use 'react-helmet' for the <link/> tag
    return (<div>
      <link rel="stylesheet" href="style.css" />
      <div className="header">
        <img src="/img/react.svg" className="logo" alt="logo" />
        <h2>Welcome to AB</h2>
      </div>
    </div>)
  }
}

export default Header
