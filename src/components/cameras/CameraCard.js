import React from 'react'
import { connect } from 'react-redux'
import { destroyCamera } from '../../actions/actions'
import CameraForm from './CameraForm'

class CameraCard extends React.Component{
    state = {
        editing: false
    }

    toggleEdit = () => {
        this.setState(pS => ({editing: !pS.editing}))
    }

    render(){
        return (
            <>
             <li>
                 <h1>{this.props.name}</h1>
                 {/* <p>{overview}</p> */}
            </li>
             <button onClick = { ()=> this.props.destroyCamera(this.props.id)}>X</button>
             <button onClick={this.toggleEdit}>{this.state.editing ? 'Cancel' : 'Edit'}</button>
             {this.state.editing ? <CameraForm 
                id={this.props.id} 
                name={this.props.name}  
                toggleEdit={this.toggleEdit}
            /> : null}
    
            </>
    
        )

    }
  
}

export default connect(null, {destroyCamera })(CameraCard)