import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCamera, updateCamera } from '../../actions/actions'



class CameraForm extends Component {
  state = {
    name: this.props.name ? this.props.name : ""
    // setting name now based if we have that name or not. This means its either coming from edit button or create button
  }
  handleChange = e => {
    this.setState({
      name: e.target.value
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


    this.setState({name: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder='name' 
          value={this.state.name}
          onChange={this.handleChange}
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