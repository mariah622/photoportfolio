import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPhotographer } from '../../actions/photographerAction'

class PhotographerForm extends Component {
  state = {
    name: "",
    age: "",
    hometown: "",
    years_experience: "",
    hobbies: ""
  
  }
  
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleAgeChange = e => {
    this.setState({
      age: e.target.value
    })
  }

  handleHometownChange = e => {
    this.setState({
      hometown: e.target.value
    })
  }

  handleYearsExperienceChange = e => {
    this.setState({
      years_experience: e.target.value
    })
  }
  
  handleHobbiesChange = e => {
    this.setState({
      hobbies: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createPhotographer(this.state)
    this.setState({name: "", age: '', hometown: '', years_experience: '', hobbies: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder='Name' 
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input 
          type="text" 
          placeholder='Age' 
          value={this.state.age}
          onChange={this.handleAgeChange}
        />
 
         <input 
          type="text" 
          placeholder='Hometown' 
          value={this.state.hometown}
          onChange={this.handleHometownChange}
        />
        <input 
          className="long"
          type="text" 
          placeholder='Years Experience' 
          value={this.state.years_experience}
          onChange={this.handleYearsExperienceChange}
        />
         <input 
          className="long"
          type="text" 
          placeholder='Hobbies' 
          value={this.state.hobbies}
          onChange={this.handleHobbiesChange}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { createPhotographer  })(PhotographerForm); 
 