import React, { Component } from 'react'
import Header from '../common/Header'

class MyResourceIndex extends Component {

  static async getInitialProps({ ...ctx }) {
    const { users, companies, myResource } = ctx.data
    return { users, companies, myResource }
  }

  deleteBtn(resourceId) {
    return (
      <form method="post" action={`/myresource/${resourceId}/delete`} className="del-button">
        <input type="hidden" name="_method" value="delete" />
        <input type="hidden" name="id" value={resourceId} />
        <input type="submit" value="x" />
      </form>
    )
  }

  resource(collection) {
    return collection.map((resource) => (
      <li key={`resource-${resource.id}`}>
        <a href={`/myResource/${resource.id}/edit`}>{resource.name}</a>
        {this.deleteBtn(resource.id)}
      </li>
    ))
  }

  render() {
    return (<div className="About Page">
      <Header />
      <h1>My Resource</h1>
      <section className="content">
        <p>e.g. Blogposts or todolist</p>
        <ul>
          {
            this.resource(this.props.myResource)
          }
        </ul>
      </section>
    </div>)
  }
}

export default MyResourceIndex
