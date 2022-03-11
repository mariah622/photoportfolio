// import { useState, useEffect, Component} from 'react'
// import React, { Component } from 'react'
import React, { Component } from 'react'
import CameraForm from './CameraForm'
import { connect } from 'react-redux'
import { fetchCameras } from '../../actions/cameraActions'
import CameraCard from './CameraCard';

class Cameras extends Component{

  componentDidMount(){
    this.props.dispatchFetchCameras()

  }

  render() {
    return (
      <div className='maindiv'>
        <h1>Cameras</h1>
        <CameraForm/>
        <ul>
        {(this.props.cameras ?? []).map(c => <CameraCard key={c.id}{...c}/>)}
        </ul>
        {/* <CameraList camera={camera}/> */}
        {/* <CameraCard/> */}
      </div>
    

    )
  }
} 

function mapDispatchToProps(dispatch){
  return {
    dispatchFetchCameras: () => dispatch(fetchCameras())
  }
    
}

function mapStateToProps(state) {
  return {
    cameras: state.cameraReducer.cameras
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cameras)
