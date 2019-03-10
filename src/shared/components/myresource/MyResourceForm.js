import React, { Component } from 'react'

class MyResourceForm extends Component {

  render() {
    const resource = this.props.resource
    const name = resource && resource.name
    return (
      <div>
        <label htmlFor="resource-name"><strong>Name:</strong></label>
        <div className="s7" />
        <input id="resource-name" type="text" name="name" value={name} />
        <div className="s20" />
        <label htmlFor="resource-short-desc">Description:</label>
        <div className="s7" />
        <textarea name="short-desc" id="resource-short-desc">

        </textarea>
      </div>
    )
  }

}

export default MyResourceForm
