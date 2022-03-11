import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photoActions'



class PhotoForm extends Component {
  state = {
    image: this.props.image ? this.props.image : "",
    caption: this.props.caption ? this.props.caption: "",
    // likes: this.props.likes ? this.props.likes : ""
  }

  handleImageChange = e => {
    this.setState({
      image: e.target.value
    })
  }

  handleCaptionChange = e => {
    this.setState({
      caption: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createPhoto(this.state)
    this.setState({image: '', caption: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder='image' 
          value={this.state.image}
          onChange={this.handleImageChange}
        />
        <input 
          type="text" 
          placeholder='caption' 
          value={this.state.caption}
          onChange={this.handleCaptionChange}
        />
        <input type="submit" value={this.props.id}  />
      </form>
    )
  }
}

export default connect(null, { createPhoto })(PhotoForm); 
