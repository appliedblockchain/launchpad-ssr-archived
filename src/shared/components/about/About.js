import React, { Component } from 'react'
import Header from '../common/Header'

class About extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies, newResource } = ctx.data
    return { users, companies, newResource }
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

  myResources(collection) {
    return (
      collection.map((resource) => (
        <li key={`org-${resource.id}`}>{resource.name}</li>
      ))
    )
  }

  render() {
    const users = this.props.users
    const companies = this.props.companies
    const resources = this.props.newResource

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
        <h1>Resources ({resources.length})</h1>
        <ul>
          { this.myResources(resources) }
        </ul>
      </section>
    </div>)
  }
}

export default About
