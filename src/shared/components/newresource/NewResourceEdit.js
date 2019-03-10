import React, { Component } from 'react'
import Header from '../common/Header'
import NewResourceForm from './NewResourceForm'

class NewResourceEdit extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { newResource } = ctx.data
    return { newResource }
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
    const resources = this.props.newResource
    const resource = resource[0]
    return (<div className="NewResource NewResourceEdit Page">
      <Header />
      <h1>Edit resource</h1>
      <form method="post" action="/newresource/{resource.id}">
        <NewResourceForm />
        <input type="submit" value="Edit" />
      </form>
    </div>)
  }
}

export default NewResourceEdit
