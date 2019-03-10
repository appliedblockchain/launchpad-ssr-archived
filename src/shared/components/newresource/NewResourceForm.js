import React, { Component } from 'react'
// import VSpace from '../utils/VSpace'
// <Vspace s=100 />

class NewResourceForm extends Component {

  render() {
    return (
      <div>
        <label for="resource-name">Name:</label>
        <div class="s7"/>
        <input id="resource-name" type="text" name="name" />
        <label for="resource-short-desc">Short Description:</label>
        <div class="s7"/>
        <input id="resource-short-desc" type="text" name="short-desc" />
      </div>
    )
  }
}

export default NewResourceForm
