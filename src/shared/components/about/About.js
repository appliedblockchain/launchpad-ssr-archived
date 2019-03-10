import React, { Component } from 'react'
import Header from '../common/Header'

class About extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies } = ctx.data
    return { users, companies }
  }

  users(collection) {
    console.log("---")
    const mapppz = collection.map((user) => (
      <li key={`user-${user.id}`}>{user.name}</li>
    ))
    console.log(mapppz)
    return (
      mapppz
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
    const users = this.props.users
    const companies = this.props.companies

    return (<div className="About Page">
      <Header />
      <h1>About</h1>
      <section className="content">
        <h1>Users ({users.length})</h1>
        <ul>
          { this.users(users) }
        </ul>
        <h1>Companies ({companies.length})</h1>
        <ul>
          { this.companies(companies) }
        </ul>
      </section>
    </div>)
  }
}

export default About
