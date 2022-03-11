import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW } from "./actionTypes";

export const fetchReviews = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_REVIEWS, payload:data}))

    }
}

export const createReview = (review) => {
    return dispatch => {
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
              'Content-Type': "application/json",
              'Accept': "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(resp => resp.json())
        .then(review => dispatch({type: ADD_REVIEW, payload: review}))
    }
}


export const destroyReview = (id) => {

    return dispatch => {
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: "DELETE",
        })
        .then(r => dispatch({type: DELETE_REVIEW, payload: id}))
    }

}