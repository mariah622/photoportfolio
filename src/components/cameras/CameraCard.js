// import React from 'react'
import { connect } from 'react-redux'
import { destroyCamera } from '../../actions/actions'

function CameraCard({id, name, destroyCamera}) {
    return (
        <>
         <li>{name}</li>
         <button onClick = { ()=> destroyCamera(id)}>X</button>

        </>

    )
  
}

export default connect(null, {destroyCamera })(CameraCard)