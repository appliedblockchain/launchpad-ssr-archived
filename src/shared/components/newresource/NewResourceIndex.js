import React, { Component } from 'react'
import Header from '../common/Header'

class NewResourceIndex extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { users, companies, newResource } = ctx.data
    return { users, companies, newResource }
  }

  deleteBtn(resourceId) {
    return (
      <form method="post" action={`/newresource/${resourceId}/delete`} className="del-button">
        <input type="hidden" name="_method" value="DELETE" />
        <input type="hidden" name="id" value={resourceId} />
        <input type="submit" value="x" />
      </form>
    )
  }

  resource(collection) {
    return (
      collection.map((resource) => (
        <li key={`resource-${resource.id}`}>{resource.name} {this.deleteBtn(resource.id)}</li>
      ))
    )
  }

  render() {
    return (<div className="About Page">
      <Header />
      <h1>Resource</h1>
      <ul>
        {
          this.resource(this.props.newResource)
        }
      </ul>
    </div>)
  }
}

export default NewResourceIndex
