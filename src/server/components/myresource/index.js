import React, { Component } from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

class MyResourceIndex extends Component {
  static get propTypes() {
    return {
      currentUser: PropTypes.object,
      myResource: [ {
        name: PropTypes.string,
        description: PropTypes.string,
        created_at: PropTypes.date,
        updated_at: PropTypes.date
      } ]
    }
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
    const { currentUser, myResource } = this.props

    return (
      <div className="About Page">
        <Header currentUser={currentUser} />
        <h1>My Resource</h1>
        <section className="content">
          <p>e.g. Blogposts or todolist</p>
          <ul>
            {
              this.resource(myResource)
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default MyResourceIndex
