import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCameras } from '../../src/actions/cameraActions'
import CameraForm from '../components/cameras/CameraForm'
import CameraCard from '../components/cameras/CameraCard'


class CameraContainer extends Component{

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
    cameras: state.cameraReducer.cameras,
    reviews: state.reviewReducer.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer)
