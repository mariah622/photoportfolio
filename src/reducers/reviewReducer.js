import { GET_REVIEWS, ADD_REVIEW } from "../actions/actionTypes";

const initialState = {
  reviews:[]
}

function reviewReducer(state = initialState, action){
  switch(action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      }

    case ADD_REVIEW:
      return {
        ...state, 
        reviews: [...state.reviews, action.payload]
      }

    default:
      return state;
  }

  
}

export default reviewReducer
