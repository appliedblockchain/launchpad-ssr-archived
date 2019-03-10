import React, { Component } from 'react'

class MyResourceForm extends Component {

  render() {
    const resource = this.props.resource
    const name = resource && resource.name
    return (
      <div>
        <label htmlFor="resource-name">Name:</label>
        <div className="s7" />
        <input id="resource-name" type="text" name="name" value={name} />
        <label htmlFor="resource-short-desc">Short description:</label>
        <div className="s7" />
        <input id="resource-short-desc" type="text" name="short-desc" value="..." />
      </div>
    )
  }

}

export default MyResourceForm
