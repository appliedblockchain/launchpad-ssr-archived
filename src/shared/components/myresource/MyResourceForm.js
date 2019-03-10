import React, { Component } from 'react'
// import VSpace from '../utils/VSpace'
// <Vspace s=100 />

class MyResourceForm extends Component {

  render() {
    const resource = this.props.resource
    const name = resource && resource.name
    return (
      <div>
        <label for="resource-name">Name:</label>
        <div class="s7"/>
        <input id="resource-name" type="text" name="name" value={name} />
        <label for="resource-short-desc">Short Description:</label>
        <div class="s7"/>
        <input id="resource-short-desc" type="text" name="short-desc" />
      </div>
    )
  }

}

export default MyResourceForm
