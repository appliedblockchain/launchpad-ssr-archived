import React, { Component } from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

class About extends Component {

  static async getInitialProps({ ...ctx }) {
    const { users, companies, myResource } = ctx.data
    return { users, companies, myResource }
  }

  static get propTypes() {
    return {
      users: PropTypes.array,
      companies: PropTypes.array,
      myResource: PropTypes.array
    }
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

  resources(resources) {
    return resources.map((resource) => (
      <li key={`org-${resource.id}`}>{resource.name}</li>
    ))
  }

  render() {
    const users = this.props.users
    const companies = this.props.companies
    const resources = this.props.myResource

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
          { this.resources(resources) }
        </ul>
      </section>
    </div>)
  }
}

export default About
