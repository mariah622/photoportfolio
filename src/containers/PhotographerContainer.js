import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotographers } from '../actions/photographerAction'
import PhotographerCard from '../components/photographers/PhotographyCard'
import PhotographerForm from '../components/photographers/PhotographerForm'



class PhotographerContainer extends Component{

  componentDidMount(){
    this.props.dispatchFetchPhotographers()

  }

  render() {
    return (
      <div className='maindiv'>
        <h1>Photographers</h1>
        <PhotographerForm/>
        <ul>
        {(this.props.photographers ?? []).map(p => <PhotographerCard key={p.id}{...p}/>)}
        </ul>

    </div>
        

    )
  }
} 

function mapDispatchToProps(dispatch){
  return {
    dispatchFetchPhotographers: () => dispatch(fetchPhotographers())
  }
    
}

function mapStateToProps(state) {
  return {
    photographers: state.photographerReducer.photographers,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotographerContainer)
