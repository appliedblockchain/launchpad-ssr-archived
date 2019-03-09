import React, { Component } from 'react'
import Header from '../common/Header'

class About extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }

  users(collection) {
    return (
      collection.map((user) => (
        <li key={`user-${user.id}`}>{user.name}</li>
      ))
    )
  }

  companies(collection) {
    return (
      collection.map((company) => (
        <li key={`org-${company.id}`}>{company.name}</li>
      ))
    )
  }

  render() {
    return (<div className="About Page">
      <Header />
      <h1>Users</h1>
      <li>
        {
          this.users(this.props.users)
        }
      </li>
      <h1>Compz</h1>
      <li>
        {
          this.companies(this.props.companies)
        }
      </li>
      <p>...</p>
      <p>back to the <a href="/">Home page</a></p>
    </div>)
  }
}

export default About
