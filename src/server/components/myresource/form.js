import React from 'react'
import PropTypes from 'prop-types'

function MyResourceForm(props) {

  const resource = props.resource
  const name = resource && resource.name
  const description = resource && resource.description
  return (
    <div>
      <label htmlFor="resource-name"><strong>Name:</strong></label>
      <div className="s7" />
      <input id="resource-name" type="text" name="name" value={name} />
      <div className="s20" />
      <label htmlFor="resource-short-desc">Description:</label>
      <div className="s7" />
      <textarea name="description" id="resource-short-desc" defaultValue={description}>

      </textarea>
    </div>
  )
}

MyResourceForm.propTypes = {
  resource: {
    name: PropTypes.string,
    description: PropTypes.string
  }
}

export default MyResourceForm
