
import { Route } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCameras } from '../../src/actions/cameraActions'
import Camera from '../components/cameras/Cameras'


class CameraContainer extends Component{

  componentDidMount(){
    this.props.dispatchFetchCameras()

  }

  render() {
    return (
        <div>
            <Route path='/cameras'  element={<Camera cameras={this.props.cameras} />} />
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
