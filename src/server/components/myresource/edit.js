import React, { Component } from 'react'
import Header from '../common/Header'
import MyResourceForm from './Form'
import PropTypes from 'prop-types'

class MyResourceEdit extends Component {
  static get propTypes() {
    return {
      path: PropTypes.string,
      myResource: PropTypes.any, // eslint-disable-line
      currentUser: PropTypes.object
    }
  }

  resourceDetails(resource) {
    return (<div>
      <section className="details">
        <h1>{resource.name}</h1>
        <p>this is a resource description lorem ipsum details antani</p>
      </section>
    </div>)
  }

  render() {
    const { currentUser, path, myResource: resources } = this.props
    const id = path.split('/')[2]
    const resource = resources.find((res) => res.id === Number(id))

    return (
      <div className="MyResource MyResourceEdit Page">
        <Header currentUser={currentUser} />
        <h1>Edit resource</h1>
        <h3>(id: {resource.id})</h3>
        <form method="post" action={`/myresource/${resource.id}/update`}>
          <input type="hidden" name="_method" value="put" />
          <MyResourceForm resource={resource} />
          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

export default MyResourceEdit
