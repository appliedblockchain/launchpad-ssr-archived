import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../nav/Nav'

class Header extends Component {
  static async getInitialProps({ ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }
  render() {
    const logoImg = "ab.jpg"
    // const logoImg = `react.svg`
    const logoImgPath = `/img/${logoImg}`
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/style.css" />
        </Helmet>
        <a href="/">
          <div className="header">
            <img src={logoImgPath} className="logo" alt="logo" />
            <h2>Welcome to SSR React</h2>
          </div>
        </a>
        <Nav />
      </div>
    )
  }
}

export default Header
