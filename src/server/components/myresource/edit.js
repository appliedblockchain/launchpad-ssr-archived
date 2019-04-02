import React, { Component } from 'react'
import Header from '../common/Header'
import MyResourceForm from './form'
import PropTypes from 'prop-types'

class MyResourceEdit extends Component {

  static async getInitialProps({ ...ctx }) {
    const { myResource, currentUser } = ctx.data
    return { myResource, currentUser }
  }

  static get propTypes() {
    return {
      match: PropTypes.object,
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
    console.log('PROPS*******', this.props)
    // const params = this.props.match.params
    // console.log('params', params)
    const { myResource: resources, currentUser } = this.props.data
    const { path } = this.props
    console.log('PATH', path)
    const id = path.split('/')[2]
    console.log('resources', resources)
    const resource = resources.find((res) => {
      return res.id === Number(id)
    })

    console.log('resource', resource, id)

    return (<div className="MyResource MyResourceEdit Page">
      <Header currentUser={currentUser} />
      <h1>Edit resource</h1>
      <h3>(id: {resource.id})</h3>
      <form method="post" action={`/myresource/${resource.id}/update`}>
        <input type="hidden" name="_method" value="put" />
        <MyResourceForm resource={resource} />
        <input type="submit" value="Update" />
      </form>
    </div>)
  }
}

export default MyResourceEdit
