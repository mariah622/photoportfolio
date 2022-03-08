import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCamera } from '../../actions/actions'


class CameraForm extends Component {
  state = {
    name: ""
  }
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createCamera(this.state)

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
        <input type="submit"/>
      </form>
    )
  }
}

export default connect(null, { createCamera })(CameraForm); 


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