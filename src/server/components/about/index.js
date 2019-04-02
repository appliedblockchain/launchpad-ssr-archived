import React from 'react'
import Header from '../common/Header'
import PropTypes from 'prop-types'

const Collection = ({
  keyPrefix,
  data
}) => (
  <ul>
    { data.map(d =>
      <li key={`${keyPrefix}-${d.id}`}>{d.name}</li>
    ) }
  </ul>
)

Collection.propTypes = {
  keyPrefix: PropTypes.string,
  data: PropTypes.array
}

const About = ({
  users,
  companies,
  currentUser,
  myResource: resources
}) => {
  return (
    <div className="About Page">
      <Header currentUser={currentUser} />
      <h1>About</h1>
      <section className="content">
        <h1>Users ({users.length})</h1>
        <Collection keyPrefix="user" data={users} />

        <h1>Companies ({companies.length})</h1>
        <Collection keyPrefix="user" data={companies} />

        <h1>Resources ({resources.length})</h1>
        <Collection keyPrefix="user" data={resources} />
      </section>
    </div>
  )
}

About.propTypes = {
  users: PropTypes.array,
  companies: PropTypes.array,
  myResource: PropTypes.array,
  currentUser: PropTypes.object
}

export default About
