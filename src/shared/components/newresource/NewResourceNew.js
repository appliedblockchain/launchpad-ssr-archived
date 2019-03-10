import React, { Component } from 'react'
import Header from '../common/Header'
import NewResourceForm from './NewResourceForm'

class NewResourceNew extends Component {

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const { newResource } = ctx.data
    return { newResource }
  }

  render() {
    const resources = this.props.newResource

    return (
      <div className="NewResource NewResourceNew Page">
        <Header />
        <h1>New resource</h1>
        <section className="content">
          <form method="post" action="/newresource">
            <NewResourceForm />
            <input type="submit" value="Create" />
          </form>
        </section>
      </div>
    )
  }
}

export default NewResourceNew
