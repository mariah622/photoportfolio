import React from 'react'

class PhotographerCard extends React.Component{

    render(){
        return (
            <div className='container'>
                <li className='lis'>
                    <h2>{this.props.name}</h2>
                    <p>Age: {this.props.age}</p>
                    <p>Hometown: {this.props.hometown}</p>
                    <p>Years Experience: {this.props.years_experience}</p>
                    <p>Hobbies: {this.props.hobbies}</p>
                </li>
            </div>
        )
    }
}

export default PhotographerCard

