import React, { Component } from 'react'
import Header from '../common/Header'

class Login extends Component {
  render() {
    return (
      <div className="Login Page">
        <Header />
        <section className="content">
          <form method="post" action="/sessions/create">
            <label htmlFor="resource-name"><strong>Email:</strong></label>
            <div className="s7" />
            <input id="resource-name" type="email" name="email" />
            <div className="s20" />
            <label htmlFor="resource-name"><strong>Password:</strong></label>
            <div className="s7" />
            <input id="resource-name" type="password" name="password" />
            <div className="s20" />
            <input type="submit" value="Log in" />
          </form>
        </section>
      </div>
    )
  }
}

export default Login
