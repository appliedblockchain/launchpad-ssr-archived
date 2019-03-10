import React, { Component } from 'react'
import Header from '../common/Header'

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { homePage: true }
  }

  render() {
    return (
      <div className="Home Page">
        <Header />
        <section className="content">
          <p className="intro">
            To get started, view <a href="https://github.com/appliedblockchain/base-ssr-app/tree/master/src/shared/components">this directory, where all the components reside</a>
          </p>
        </section>
      </div>
    )
  }
}

export default Home
