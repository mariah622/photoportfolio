import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/reviewActions'
// import ReviewForm from './PhotoForm'
import ReviewCard from './ReviewCard'

class Reviews extends Component{

    componentDidMount(){
        this.props.dispatchFetchReviews()
    }

    render(){
        return(
            <div className='maindiv'>
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
      reviews: state.reviewReducer.reviews
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Reviews)