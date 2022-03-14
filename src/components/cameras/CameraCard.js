import React from 'react'
import { connect } from 'react-redux'
import { destroyCamera } from '../../actions/cameraActions'
import { Link } from 'react-router-dom'
// import ReviewCard from '../reviews/ReviewCard'

class CameraCard extends React.Component{

    state={
        showDiv: false
    }
    
    render(){ 
        const { showDiv} = this.state
       
        return (
            <div className='container'>
                <li className='lis'>
                    <h2>{this.props.brand}</h2>
                    <h3>Model: {this.props.name}</h3>
                    <p>Body Type: {this.props.camera_type} </p>
                    <p>Overview: {this.props.overview}</p>
            
                    <Link to='/Reviews'>Make or See all Reviews</Link>
                </li>
                
                <div>
                    <button onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? 'Hide Reviews' : 'Show Reviews' }
                    </button>
                    { showDiv && (
                        <div key='reviews'>
                            {this.props.reviews.map(review => 
                                <li key={review.id}>
                                    <p>Title:{review.title}</p>
                                    <p>Description:</p>{review.description}

                                    
                                    <hr></hr>
                                    </li>
                                    )}
    
                        </div>
                        )}
                </div>
                
                <button onClick = { ()=> this.props.destroyCamera(this.props.id)}>X</button>
            </div>
        )
    }
}

export default connect(null, {destroyCamera })(CameraCard)

