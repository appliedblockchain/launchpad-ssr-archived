import React from 'react'
import PropTypes from 'prop-types'
import Header from '../common/Header'

const currentUserText = user => user && <p>You&#39;re logged in as {user.email}</p>

const Home = ({ currentUser }) => (
  <div className="Home Page">
    <Header currentUser={currentUser} />
    <section className="content">
      <p className="intro">
        To get started, view{' '}
        <a href="https://github.com/appliedblockchain/base-ssr-app/tree/master/src/shared/components">
          this directory, where all the components reside
        </a>
      </p>

      { currentUserText(currentUser) }
    </section>
  </div>
)

Home.propTypes = {
  currentUser: PropTypes.object
}

export default Home
