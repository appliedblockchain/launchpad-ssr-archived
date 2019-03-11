import React, { Component } from 'react'
import Header from '../common/Header'

class Home extends Component {
  static async getInitialProps({ ...ctx }) {
    const { currentUser } = ctx.data
    return { currentUser }
  }

  currentUserText(user) {
    return (user && (<p>You&#39;re logged in as {user.email}</p>))
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="Home Page">
        <Header />
        <section className="content">
          <p className="intro">
            To get started, view <a href="https://github.com/appliedblockchain/base-ssr-app/tree/master/src/shared/components">this directory, where all the components reside</a>
          </p>

          {this.currentUserText(currentUser)}
        </section>
      </div>
    )
  }
}

export default Home
