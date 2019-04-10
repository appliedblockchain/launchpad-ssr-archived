import React, { Component } from 'react'
import Header from '../common/Header'
import MyResourceForm from './MyResourceForm'
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
    const params = this.props.match.params
    console.log('params', params)
    const resources = this.props.myResource
    const currentUser = this.props.currentUser
    const resource = resources.find((res) => {
      return res.id === Number(params.id)
    })

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
