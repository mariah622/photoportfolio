import React from 'react'
import { connect } from 'react-redux'
import { destroyReview} from '../../actions/reviewActions'

class ReviewCard extends React.Component{
    render(){
        return (
            <div className='container'>
                <li className='lis'>
                    <h2>{this.props.title}</h2>
                    <h3>Description: {this.props.description}</h3>
                </li>
                <button onClick = { ()=> this.props.destroyReview(this.props.id)}>X</button>
    
            </div>
    
        )

    }
  
}

export default connect(null, {destroyReview })(ReviewCard)