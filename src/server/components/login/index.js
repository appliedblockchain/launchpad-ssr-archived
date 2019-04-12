import React from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'
import qs from 'query-string'

const Login = ({
  location
}) => {
  const { redirect, message } = qs.parse(location.search)

  return (
    <div className="Login Page">
      <Header />
      <section className="content">
        { message && <div className="error">{message}</div> }
        <form method="post" action="/sessions/create">
          <label htmlFor="resource-name"><strong>Email:</strong></label>
          <div className="s7" />
          <input id="resource-name" type="email" name="email" />
          <div className="s20" />
          <label htmlFor="resource-name"><strong>Password:</strong></label>
          <div className="s7" />
          <input id="resource-name" type="password" name="password" />
          <div className="s20" />
          <input type="submit" value="Log in" />
          <input type="hidden" name="redirect" value={redirect} />
        </form>
      </section>
    </div>
  )

}

Login.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string
  })
}

export default Login
