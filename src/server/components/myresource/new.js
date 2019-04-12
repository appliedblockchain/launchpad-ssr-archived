import React from 'react'
import Header from '../common/Header'
import MyResourceForm from './Form'
import PropTypes from 'prop-types'

const MyResourceNew = ({ currentUser }) => (
  <div className="MyResource MyResourceNew Page">
    <Header currentUser={currentUser} />
    <h1>New Resource</h1>
    <section className="content">
      <form method="post" action="/myresource">
        <MyResourceForm />
        <input type="submit" value="Create" />
      </form>
    </section>
  </div>
)

MyResourceNew.propTypes = {
  currentUser: PropTypes.object
}

export default MyResourceNew
