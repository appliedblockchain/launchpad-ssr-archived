import React, { Component } from 'react'
import Header from '../common/Header'

class NotFoundErrorPage extends Component {
  render() {
    return (
      <div className="NotFoundErrorPage Page">
        <style>
          /* TMP remove */
          .NotFoundErrorPage.Page {
            p { font-size: 2em; }
          }
        </style>
        <Header />
        <section className="content">
          <h1>Not Found</h1>
          <h4>404</h4>

          <p className="intro">

          </p>
        </section>
      </div>
    )
  }
}

export default NotFoundErrorPage




import React, { Component } from 'react'
import Header from '../common/Header'

class NotFoundErrorPage extends Component {
  render() {
    return (
      <ul className="nav nav-main">
      </ul>
    )
  }
}

export default NotFoundErrorPage
