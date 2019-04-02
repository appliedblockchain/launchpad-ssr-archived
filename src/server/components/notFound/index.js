import React from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

const NotFoundErrorPage = ({ currentUser }) => (
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

NotFoundErrorPage.propTypes = {
  currentUser: PropTypes.object
}

export default NotFoundErrorPage
