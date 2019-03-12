import React, { Component } from 'react'
import Header from '../common/Header'

class NotFoundErrorPage extends Component {
  render() {
    return (
      <div className="NotFoundErrorPage Page">

        <Header />
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
