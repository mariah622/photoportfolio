import React from 'react'
import { connect } from 'react-redux'
import { destroyCamera } from '../../actions/cameraActions'

class CameraCard extends React.Component{
    render(){
        return (
            <div className='container'>
                <li className='lis'>
                    <h2>{this.props.brand}</h2>
                    <h3>Model: {this.props.name}</h3>
                    <p>Body Type: {this.props.camera_type} </p>
                    <p>Overview: {this.props.overview}</p>
                </li>
                <button onClick = { ()=> this.props.destroyCamera(this.props.id)}>X</button>
    
            </div>
    
        )

    }
  
}

export default connect(null, {destroyCamera })(CameraCard)