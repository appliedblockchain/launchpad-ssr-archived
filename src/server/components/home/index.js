import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../common/Header'

class Home extends Component {
  static async getInitialProps({ ...ctx }) {
    const { currentUser } = ctx.data
    return { currentUser }
  }

  static propTypes = {
    currentUser: PropTypes.object
  }

  currentUserText(user) {
    return user && <p>You&#39;re logged in as {user.email}</p>
  }

  render() {
    const { currentUser } = this.props.data
    console.log('CURR', currentUser)
    return (
      <div className="Home Page">
        <Header currentUser={currentUser} />
        <section className="content">
          <p className="intro">
            To get started, view{' '}
            <a href="https://github.com/appliedblockchain/base-ssr-app/tree/master/src/shared/components">
              this directory, where all the components reside
            </a>
          </p>

          {this.currentUserText(currentUser)}
        </section>
      </div>
    )
  }
}

export default Home
