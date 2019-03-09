import React, { Component } from 'react'
import Header from '../common/Header'

class NewResourceIndex extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies, newResource } = ctx.data
    return { users, companies, newResource }
  }

  resource(collection) {
    return (
      collection.map((resource) => (
        <li key={`resource-${resource.id}`}>{resource.name}</li>
      ))
    )
  }

  render() {
    return (<div className="About Page">
      <Header />
      <h1>Resource</h1>
      <li>
        {
          this.resource(this.props.newResource)
        }
      </li>
      <p>...</p>
      <p>back to the <a href="/">Home page</a></p>
    </div>)
  }
}

export default NewResourceIndex
