import { GET_PHOTOGRAPHERS, ADD_PHOTOGRAPHER } from "./actionTypes";

export const fetchPhotographers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/photographers')
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_PHOTOGRAPHERS, payload:data}))

    }
}

export const createPhotographer = (photographer) => {
    return dispatch => {
        fetch('http://localhost:3000/photographers', {
            method: 'POST',
            headers: {
              'Content-Type': "application/json",
              'Accept': "application/json"
            },
            body: JSON.stringify(photographer)
        })
        .then(resp => resp.json())
        .then(photographer => dispatch({type: ADD_PHOTOGRAPHER, payload: photographer}))
    }
}