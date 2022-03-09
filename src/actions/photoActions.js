import { GET_PHOTOS, ADD_PHOTO, EDIT_PHOTO, DELETE_PHOTO } from "./actionTypes";

export const fetchPhotos = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/photos')
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_PHOTOS, payload:data}))

    }
}

export const createPhoto= (photo) => {
    return dispatch => {
        fetch('http://localhost:3000/photos', {
            method: 'POST',
            headers: {
              'Content-Type': "application/json",
              'Accept': "application/json"
            },
            body: JSON.stringify(photo)
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: ADD_PHOTO, payload: photo}))
    }
}

export const updatePhoto = (photo) => {
    return dispatch => {
        fetch(`http://localhost:3000/ohotos/${photo.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(photo)
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: EDIT_PHOTO, payload: photo}))

    } 

}


export const destroyPhoto = (id) => {
    // type: DELETE_PHOTO, payload: id

    return dispatch => {
        fetch(`http://localhost:3000/photos/${id}`, {
            method: "DELETE",
        })
        .then(data => dispatch({type: DELETE_PHOTO, payload: id}))
    }

}