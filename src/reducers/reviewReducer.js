import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW} from "../actions/actionTypes";

const initialState = {
  reviews:[]
}

function reviewReducer(state = initialState, action){
  let idx;
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
    
    case DELETE_REVIEW:
      
      idx = state.reviews.findIndex(r => r.id === action.payload)
  
      return {
        ...state, 
        reviews: [
          ...state.reviews.slice(0, idx),
          ...state.reviews.slice(idx + 1)
        
        ]

      }



    default:
      return state;
  }

  
}

export default reviewReducer
