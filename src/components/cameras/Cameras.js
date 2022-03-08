// import { useState, useEffect, Component} from 'react'
// import React, { Component } from 'react'
import React, { Component } from 'react'
// import CameraList from './CameraList'
import CameraForm from './CameraForm'
import { connect } from 'react-redux'
import { fetchCameras } from '../../actions/actions'
import CameraCard from './CameraCard';

class Cameras extends Component{
  // const [camera, setCamera] = useState([])
  // useEffect(()=> {
  //     fetch('http://localhost:3000/cameras')
  //     .then(resp => resp.json())
  //     .then(data => setCamera(data))
      
  // }, [])
  // console.log(camera)

  componentDidMount(){
    // fetch('http://localhost:3000/cameras')
    // .then(resp => resp.json())
    // .then(data => this.props.dispatchSetCameras(data))
    this.props.dispatchFetchCameras()

  }

  render() {
    return (
      <div>
        <h1>Cameras</h1>
        <CameraForm/>
        <ul>
        {(this.props.cameras ?? []).map(c => <li key={c.id}>{c.name}</li>)}
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
    cameras: state.cameras
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cameras)