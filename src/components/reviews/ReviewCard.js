import React from 'react'

class ReviewCard extends React.Component{

    render(){
        return (
            <div className='container'>
                <li className='lis'>
                    <h2>{this.props.title}</h2>
                    <h3>Description: {this.props.description}</h3>
                    <p>{this.props.camera.name}</p>
                </li>
            </div>
        )
    }
}

export default ReviewCard