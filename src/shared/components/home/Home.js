import React, { Component } from 'react'
import Header from '../common/Header'

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' }
  }

  render() {
    return (
      <div className="Home Page">
        <Header />
        <p className="intro">
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code> and save to reload.
        </p>
        <p>Check out the <a href="/about">About page</a></p>
      </div>
    )
  }
}

export default Home
