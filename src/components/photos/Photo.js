import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../actions/photoActions'
import PhotoForm from './PhotoForm'
import PhotoCard from './PhotoCard'

class Photos extends Component{
    componentDidMount(){
        this.props.dispatchFetchPhotos()
    }

    render(){
        return(
            <div className='maindiv'>
                <h1>Photos</h1>
                <PhotoForm/>
                <ul>
                {(this.props.photos ?? []).map(p => <PhotoCard key={p.id}{...p}/>)}
                </ul>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
      dispatchFetchPhotos: () => dispatch(fetchPhotos())
    }
      
  }
  
  function mapStateToProps(state) {
    return {
      photos: state.photoReducer.photos
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Photos)