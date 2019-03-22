import React, { Component } from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

class Contract extends Component {

  static async getInitialProps({ ...ctx }) {
    const { contractValue } = ctx.data
    return { contractValue }
  }

  static get propTypes() {
    return {
      contractValue: PropTypes.string
    }
  }

  render() {
    const { contractValue } = this.props

    return (<div className="About Page">
      <Header />
      <h1>Hello World Contract</h1>
      <section className="content">
        <h1>Current Value: {contractValue}</h1>
        <form method="POST" action="/contract">
          <input type="hidden" name="_method" value="post" />
          <input name="message" type="text" placeholder="New value" />
          <input type="submit" />
        </form>
      </section>
    </div>)
  }
}

export default Contract
