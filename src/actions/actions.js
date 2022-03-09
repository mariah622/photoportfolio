import { GET_CAMERAS, ADD_CAMERA, EDIT_CAMERA, DELETE_CAMERA } from "./actionTypes";

export const fetchCameras = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cameras')
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_CAMERAS, payload:data}))

    }
}

export const createCamera = (camera) => {
    return dispatch => {
        fetch('http://localhost:3000/cameras', {
            method: 'POST',
            headers: {
              'Content-Type': "application/json",
              'Accept': "application/json"
            },
            body: JSON.stringify(camera)
        })
        .then(resp => resp.json())
        .then(camera => dispatch({type: ADD_CAMERA, payload: camera}))
    }
}

export const updateCamera = (camera) => {
    return dispatch => {
        fetch(`http://localhost:3000/cameras/${camera.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(camera)
        })
        .then(resp => resp.json())
        .then(c => dispatch({type: EDIT_CAMERA, payload: camera}))

    } 

}


export const destroyCamera = (id) => {
    // type: DELETE_CAMERA, payload: id

    return dispatch => {
        fetch(`http://localhost:3000/cameras/${id}`, {
            method: "DELETE",
        })
        .then(r => dispatch({type: DELETE_CAMERA, payload: id}))
    }

}