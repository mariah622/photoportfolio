import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCamera } from '../../actions/cameraActions'

class CameraForm extends Component {
  state = {
    brand: "",
    name: "",
    camera_type: "",
    overview: ""
  
  }
  
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleBrandChange = e => {
    this.setState({
      brand: e.target.value
    })
  }

  handleTypeChange = e => {
    this.setState({
      camera_type: e.target.value
    })
  }

  handleOverviewChange = e => {
    this.setState({
      overview: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createCamera(this.state)
    this.setState({name: "", brand: '', camera_type: '', overview: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder='Brand' 
          value={this.state.brand}
          onChange={this.handleBrandChange}
        />
        <input 
          type="text" 
          placeholder='Name' 
          value={this.state.name}
          onChange={this.handleNameChange}
        />
 
         <input 
          type="text" 
          placeholder='Type' 
          value={this.state.camera_type}
          onChange={this.handleTypeChange}
        />
        <input 
          className="long"
          type="text" 
          placeholder='Overview' 
          value={this.state.overview}
          onChange={this.handleOverviewChange}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { createCamera  })(CameraForm); 
 