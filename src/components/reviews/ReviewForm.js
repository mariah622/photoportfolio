// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { createReview } from '../../actions/reviewActions'

// class ReviewForm extends Component {
//   state = {
//     title: '',
//     description: '',
//     camera_id: ''
//   }

//   handleTitleChange = e => {
//     this.setState({
//       title: e.target.value
//     })
//   }

//   handleDescriptionChange = e => {
//     this.setState({
//       description: e.target.value
//     })
//   }

//   handleSelection = e => {
//     this.setState({
//       camera_id: e.target.value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault()

//     const data = {
//       title: this.state.title,
//       description: this.state.description,
//       camera_id: this.props.camera_id
//     }
//     this.props.createReview(this.state, data)
//     this.setState({title: '', description: '', camera_id:''})
//   }

//   renderCameras(){
//       const cameras = this.props.reviews.map(function(review) { return review["camera"]; });
//       return cameras.map( camera => {
//         return (
//           <option key={camera.id} value={camera.id}>
//             {camera.name}
//           </option>
//         );
//       });
//     }

//   render() {
//       console.log(this.props.cameras)
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <div className='maindiv'>
//                 <input 
//                 type="text" 
//                 placeholder='Title' 
//                 value={this.state.title}
//                 onChange={this.handleTitleChange}
//                 />
//                 <input 
//                 type="text" 
//                 placeholder='Description' 
//                 value={this.state.description}
//                 onChange={this.handleDescriptionChange}
//                 />

//                 <select name="camera" onChange={this.handleCameraChange}>
//                     {this.renderCameras()}
//                 </select>
            
//                 <input type="submit"  />
//             </div>
//         </form>
//     )
//   }
// }

// export default connect(null, { createReview  })(ReviewForm); 