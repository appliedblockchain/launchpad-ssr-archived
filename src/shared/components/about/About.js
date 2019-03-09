import React, { Component } from 'react'
import Header from '../common/Header'

class About extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }
  render() {
    return (<div className="About Page">
      <Header />
      <p>User1: {this.props.users[0].name}</p>
      <p>User2: {this.props.users[1].name}</p>
      <p>...</p>
      <p>Company1: {this.props.companies[0].name}</p>
      <p>Company2: {this.props.companies[1].name}</p>
      <p>...</p>
      <p>back to the <a href="/">Home page</a></p>
    </div>)
  }
}

export default About
