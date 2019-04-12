import React from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

const Contract = ({
  contractValue,
  currentUser
}) => (
  <div className="About Page">
    <Header currentUser={currentUser} />
    <h1>Hello World Contract</h1>
    <section className="content">
      <h1>Current Value: {contractValue}</h1>
      <form method="POST" action="/contract">
        <input type="hidden" name="_method" value="post" />
        <input name="message" type="text" placeholder="New value" />
        <input type="submit" />
      </form>
    </section>
  </div>
)

Contract.propTypes = {
  contractValue: PropTypes.string,
  currentUser: PropTypes.object
}

export default Contract
