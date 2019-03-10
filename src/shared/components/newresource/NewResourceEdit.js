import React, { Component } from 'react'
import Header from '../common/Header'
import NewResourceForm from './NewResourceForm'

class NewResourceEdit extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { newResource, params } = ctx.data
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
    const params = this.props.match.params
    console.log("params", params)
    const resources = this.props.newResource
    let resource = resources.filter((res) => {
      return res.id == Number(params.id)
    })
    resource = resource[0]
    console.log("resource:", resource)

    return (<div className="NewResource NewResourceEdit Page">
      <Header />
      <h1>Edit resource - name: "{resource.name}" - (id: {resource.id})</h1>
      <form method="post" action={`/newresource/${resource.id}/update`}>
      <input type="hidden" name="_method" value="put" />
        <NewResourceForm resource={resource} />
        <input type="submit" value="Edit" />
      </form>
    </div>)
  }
}

export default NewResourceEdit
