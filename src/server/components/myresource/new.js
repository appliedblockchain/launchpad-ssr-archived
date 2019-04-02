import React, { Component } from 'react'
import Header from '../common/Header'
import MyResourceForm from './form'
import PropTypes from 'prop-types'

class MyResourceNew extends Component {

  static async getInitialProps({ ...ctx }) {
    const { currentUser } = ctx.data
    return { currentUser }
  }

  static get propTypes() {
    return {
      currentUser: PropTypes.object
    }
  }

  render() {
    const { currentUser } = this.props.data
    return (
      <div className="MyResource MyResourceNew Page">
        <Header currentUser={currentUser} />
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
