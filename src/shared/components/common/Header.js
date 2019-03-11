import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../nav/Nav'

class Header extends Component {
  static async getInitialProps({ ...ctx }) {
    const { users, companies, currentUser } = ctx.data
    console.log('currentUser ', currentUser)
    return { users, companies, currentUser }
  }

  loginButton() {
    return (<a className="button btn-small" href="/login">Login</a>)
  }

  loggedInMessage() {
    return (<p>You&quot;re logged in!</p>)
  }

  render() {
    const { currentUser } = this.props
    const logoImg = 'ab.jpg'
    // const logoImg = `react.svg`
    const logoImgPath = `/img/${logoImg}`
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="/style.css" />
        </Helmet>
        <a href="/">
          <div className="header">
            <div className="header-right right">
              { !currentUser ? this.loginButton() : this.loggedInMessage() }
            </div>
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
