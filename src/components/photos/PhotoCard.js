import React from 'react'
import { connect } from 'react-redux'
import { destroyPhoto} from '../../actions/photoActions'

class PhotoCard extends React.Component{
   
    render(){
        return (
            <>
          
             <li >
                 <img src={this.props.image} alt='' />
                 <p>{this.props.caption}</p>
                 <button className = 'likeBtn'>
                    <i className="fas fa-heart fa-lg" style={{ color: "white" }}></i>
                 </button>
                 <br></br>

                 <br></br>
                 <button onClick = { ()=> this.props.destroyPhoto(this.props.id)}>X</button>

                 <p>{this.props.likes}</p>
            </li>
    
            </>
    
        )

    }
  
}

export default connect(null, { destroyPhoto})(PhotoCard)