import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/reviewActions'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

class Reviews extends Component{

    componentDidMount(){
        this.props.dispatchFetchReviews()
    }

    render(){
      return(
          <div className='maindiv'>
              <h1>Reviews</h1>
              <ReviewForm reviews={this.props.reviews}/>
              <ul>
              {(this.props.reviews ?? []).map(r => <ReviewCard key={r.id}{...r}/>)}
              </ul>
              
          </div>
      )
  }
}

function mapDispatchToProps(dispatch){

  
    return {
      dispatchFetchReviews: () => dispatch(fetchReviews())
    }
      
  }
  
  function mapStateToProps(state) {
    return {
      reviews: state.reviewReducer.reviews,
      cameras: state.cameraReducer.cameras
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Reviews)