import React, { Component } from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

class NotFoundErrorPage extends Component {
  static async getInitialProps({ ...ctx }) {
    const { myResource, currentUser } = ctx.data
    return { myResource, currentUser }
  }

  static get propTypes() {
    return {
      currentUser: PropTypes.object
    }
  }

  render() {
    const { currentUser } = this.props

    return (
      <div className="NotFoundErrorPage Page">

        <Header currentUser={currentUser} />
        <section className="content">
          <h1>Not Found</h1>
          <h4>404</h4>

          <p className="intro">
            This page is not present or the resouce related to this page was not loaded.
          </p>
        </section>
      </div>
    )
  }

}

export default NotFoundErrorPage
