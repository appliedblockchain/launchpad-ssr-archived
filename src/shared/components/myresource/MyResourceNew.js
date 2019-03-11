import React, { Component } from 'react'
import Header from '../common/Header'
import MyResourceForm from './MyResourceForm'

class MyResourceNew extends Component {

  static async getInitialProps({ ...ctx }) {
    const { myResource } = ctx.data
    return { myResource }
  }

  render() {
    return (
      <div className="MyResource MyResourceNew Page">
        <Header />
        <h1>New Resource</h1>
        <section className="content">
          <form method="post" action="/myresource">
            <MyResourceForm />
            <input type="submit" value="Create" />
          </form>
        </section>
      </div>
    )
  }
}

export default MyResourceNew
