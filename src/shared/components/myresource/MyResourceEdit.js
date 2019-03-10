import React, { Component } from 'react'
import Header from '../common/Header'
import MyResourceForm from './MyResourceForm'

class MyResourceEdit extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { myResource } = ctx.data
    return { myResource }
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
    console.log('params', params)
    const resources = this.props.myResource
    let resource = resources.filter((res) => {
      return res.id == Number(params.id)
    })
    resource = resource[0]
    console.log('resource:', resource)

    return (<div className="MyResource MyResourceEdit Page">
      <Header />
      <h1>Edit resource - name: "{resource.name}" - (id: {resource.id})</h1>
      <form method="post" action={`/myresource/${resource.id}/update`}>
        <input type="hidden" name="_method" value="put" />
        <MyResourceForm resource={resource} />
        <input type="submit" value="Update" />
      </form>
    </div>)
  }
}

export default MyResourceEdit
