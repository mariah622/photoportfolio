import React from 'react'
import { connect } from 'react-redux'
import { destroyCamera } from '../../actions/cameraActions'
import CameraForm from './CameraForm'
import PopComp from '../reviews/ReviewPopUps/PopComp'

class CameraCard extends React.Component{
    state = {
        editing: false
    }

    toggleEdit = () => {
        this.setState(pS => ({editing: !pS.editing}))
    }

    render(){
        return (
            <div>
                <li>
                    <h1>{this.props.brand}</h1>
                    <h3>Model: {this.props.name}</h3>
                    <p>Body Type: {this.props.camera_type} </p>
                    <p>Overview: {this.props.overview}</p>
                </li>
                
                <PopComp/>
                <button onClick = { ()=> this.props.destroyCamera(this.props.id)}>X</button>
                <button onClick={this.toggleEdit}>{this.state.editing ? 'Cancel' : 'Edit'}</button>
                
                {this.state.editing ? <CameraForm 
                    id={this.props.id} 
                    brand={this.props.brand}
                    name={this.props.name} 
                    camera_type={this.props.camera_type} 
                    overview={this.props.overview}
                    toggleEdit={this.toggleEdit}
                /> : null}
    
            </div>
    
        )

    }
  
}

export default connect(null, {destroyCamera })(CameraCard)