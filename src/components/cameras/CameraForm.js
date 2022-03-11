import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCamera, updateCamera } from '../../actions/cameraActions'



class CameraForm extends Component {
  state = {
    brand: this.props.brand ? this.props.brand : "",
    name: this.props.name ? this.props.name : "",
    camera_type: this.props.camera_type ? this.props.camera_type : "",
    overview: this.props.overview ? this.props.overview: ""
    // setting name now based if we have that name or not. This means its either coming from edit button or create button
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

    if(this.props.id){
      this.props.updateCamera({...this.state, id: this.props.id})
      this.props.toggleEdit()

    } else {
      this.props.createCamera(this.state)
      // dispatch create action

    }


    this.setState({name: "", brand: '', camera_type: '', overview: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder='brand' 
          value={this.state.brand}
          onChange={this.handleBrandChange}
        />
        <input 
          type="text" 
          placeholder='name' 
          value={this.state.name}
          onChange={this.handleNameChange}
        />
 
         <input 
          type="text" 
          placeholder='type' 
          value={this.state.camera_type}
          onChange={this.handleTypeChange}
        />
        <input 
          type="text" 
          placeholder='overview' 
          value={this.state.overview}
          onChange={this.handleOverviewChange}
        />
        <input type="submit" value={this.props.id ? 'Edit' : "Create"} />
      </form>
    )
  }
}

export default connect(null, { createCamera, updateCamera })(CameraForm); 


// import { connect } from 'react-redux';
// import { createCamera } from '../../actions/actions'
// import React from 'react'
// import { useState } from 'react'

// export default function CameraForm(){
//     const [brand, setBrand] = useState('')
//     const [name, setName] = useState('')
//     const [camera_type, setCameraType] = useState('')
//     const [overview, setOverview] = useState('')

//     function handleSubmit(e){
//         e.preventDefault();

//         createCamera({
//           brand: brand,
//           name: name,
//           camera_type: camera_type,
//           overview: overview
//         })
//         console.log('adding camera...')


//     }

//     return(
//         <form className='camera-form' onSubmit={handleSubmit}>
//             <h3>Create Camera:</h3>
//             <input type='text' value={brand} onChange={e=> setBrand(e.target.value)} placeholder='brand'/>
//             <br/>
//             <input type='text' value={name} onChange={e=> setName(e.target.value)} placeholder='name'/>
//             <br/>
//             <input type='text' value={camera_type} onChange={e=> setCameraType(e.target.value)}placeholder='camera type'/>
//             <br/>
//             <input type='text' value={overview} onChange={e=> setOverview(e.target.value)}placeholder='overview'/>
//             <br/>

//             <input type='submit' />
          

//         </form>
//     )
// }