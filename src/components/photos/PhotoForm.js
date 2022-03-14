import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photoActions'



class PhotoForm extends Component {
  state = {
    image:  "",
    caption: "",
    likes: ""
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
  handleLikesChange = e => {
    this.setState({
      likes: e.target.value
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
        <input 
          type="text" 
          placeholder='likes' 
          value={this.state.likes}
          onChange={this.handleLikesChange}
        />
        <input type="submit"  />
      </form>
    )
  }
}

export default connect(null, { createPhoto })(PhotoForm); 
